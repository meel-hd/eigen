import { Box, color, Flex, Theme } from "@artsy/palette"
import { ScrollableTab } from "lib/Components/ScrollableTabBar"
import { Schema, screenTrack } from "lib/utils/track"
import React, { Component } from "react"
import ScrollableTabView from "react-native-scrollable-tab-view"

import { NativeModules, ScrollView } from "react-native"
import { RelayProp } from "react-relay"
import styled from "styled-components/native"
import { BucketKey, BucketResults } from "../Map/bucketCityResults"
import { FiltersBar } from "../Map/Components/FiltersBar"
import { EventEmitter } from "../Map/EventEmitter"
import { MapTab } from "../Map/types"
import { cityTabs } from "./cityTabs"
import { AllEvents } from "./Components/AllEvents"
import { EventList } from "./Components/EventList"

interface Props {
  verticalMargin?: number
  isDrawerOpen?: boolean
  initialTab?: number
  citySlug: string
  tracking: any
}

interface State {
  buckets?: BucketResults
  filter: MapTab
  relay: RelayProp
  cityName: string
  citySlug: string

  selectedTab: number
  sponsoredContent: { introText: string; artGuideUrl: string }
}
const AllCityMetaTab = 0

const screenSchemaForCurrentTabState = currentSelectedTab => {
  switch (currentSelectedTab) {
    case "all":
      return Schema.PageNames.CityGuideAllGuide
    case "saved":
      return Schema.PageNames.CityGuideSavedGuide
    case "fairs":
      return Schema.PageNames.CityGuideFairsGuide
    case "galleries":
      return Schema.PageNames.CityGuideGalleriesGuide
    case "museums":
      return Schema.PageNames.CityGuideMuseumsGuide
    default:
      return null
  }
}

@screenTrack<Props>(props => ({
  context_screen: screenSchemaForCurrentTabState("all"),
  context_screen_owner_type: Schema.OwnerEntityTypes.CityGuide,
  context_screen_owner_slug: props.citySlug,
  context_screen_owner_id: props.citySlug,
}))
export class CityView extends Component<Props, State> {
  state = {
    buckets: null,
    filter: cityTabs[0],
    relay: null,
    cityName: "",
    selectedTab: AllCityMetaTab,
    citySlug: "",
    sponsoredContent: null,
  }

  tabView?: ScrollableTabView | any

  scrollViewVerticalStart = 0
  scrollView: ScrollView = null

  handleEvent = ({
    filter,
    buckets,
    cityName,
    citySlug,
    relay,
    sponsoredContent,
  }: {
    filter: MapTab
    buckets: BucketResults
    cityName: string
    relay: RelayProp
    citySlug: string
    sponsoredContent: { introText: string; artGuideUrl: string }
  }) => {
    this.setState({
      buckets,
      filter,
      cityName,
      citySlug,
      relay,
      sponsoredContent,
    })
  }

  componentWillMount() {
    EventEmitter.subscribe("map:change", this.handleEvent)
  }

  componentWillUnmount() {
    EventEmitter.unsubscribe("map:change", this.handleEvent)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isDrawerOpen !== nextProps.isDrawerOpen) {
      this.fireScreenViewAnalytics()
    }
  }

  componentDidUpdate() {
    const scrollview = this.tabView && this.tabView.scrollView
    if (!this.props.isDrawerOpen && scrollview) {
      scrollview.scrollTo({ x: 0, y: 0, animated: true })
    }

    if (this.state.buckets) {
      // We have the Relay response; post a notification so that the ARMapContainerViewController can finalize the native UI.
      NativeModules.ARNotificationsManager.postNotificationName("ARLocalDiscoveryQueryResponseReceived", {})
    }
  }

  setSelectedTab(selectedTab) {
    this.setState({ selectedTab: selectedTab.i }, this.fireScreenViewAnalytics)
    EventEmitter.dispatch("filters:change", selectedTab.i)
  }

  fireScreenViewAnalytics = () => {
    this.props.tracking.trackEvent({
      context_screen: screenSchemaForCurrentTabState(this.state.filter.id),
      context_screen_owner_type: Schema.OwnerEntityTypes.CityGuide,
      context_screen_owner_slug: this.state.citySlug,
      context_screen_owner_id: this.state.citySlug,
    })
  }

  render() {
    const { buckets, filter, cityName, citySlug } = this.state
    const { verticalMargin } = this.props
    // bottomInset is used for the ScrollView's contentInset. See the note in ARMapContainerViewController.m for context.
    const bottomInset = this.scrollViewVerticalStart + (verticalMargin || 0)
    // const scrollview = this.tabView._scrollView

    /*
     <Flex py={1} alignItems="center" style={{ flex: 1 }}>
            <Handle />
            <ScrollableTabView
              initialPage={this.props.initialTab || AllCityMetaTab}
              ref={tabView => (this.tabView = tabView)}
              onChangeTab={selectedTab => this.setSelectedTab(selectedTab)}
              renderTabBar={props => (
                <>
                  <TabBar {...props} />
                </>
              )}
              onLayout={layout => (this.scrollViewVerticalStart = layout.nativeEvent.layout.y)}
              // These are the ScrollView props for inside the scrollable tab view
              contentProps={{
                contentInset: { bottom: bottomInset },
                scrollEnabled: isDrawerOpen,
                ref: r => {
                  if (r) {
                    this.scrollView = r as any
                  }
                },
              }}
            >
              <ScrollableTab tabLabel="All">
                <AllEvents
                  cityName={cityName}
                  key={cityName}
                  currentBucket={filter.id as BucketKey}
                  sponsoredContent={this.state.sponsoredContent}
                  buckets={buckets}
                  relay={this.state.relay}
                />
              </ScrollableTab>

              {this.filters.filter(f => f.id !== "all").map(f => {
                return (
                  <ScrollableTab tabLabel={f.text}>
                    <CityTab
                      key={cityName + filter.id}
                      bucket={buckets[filter.id]}
                      type={filter.text}
                      cityName={cityName}
                      relay={this.state.relay}
                    />
                  </ScrollableTab>
                )
              })}
            </ScrollableTabView>
          </Flex>
    */
    return (
      buckets && (
        <Theme>
          <>
            <Box>
              <Flex py={1} alignItems="center">
                <Handle />
              </Flex>
              <FiltersBar
                tabs={cityTabs}
                goToPage={activeIndex => EventEmitter.dispatch("filters:change", activeIndex)}
              />
              <ScrollView
                contentInset={{ bottom: bottomInset }}
                onLayout={layout => {
                  this.scrollViewVerticalStart = layout.nativeEvent.layout.y
                  NativeModules.ARNotificationsManager.postNotificationName("ARLocalDiscoveryCityGotScrollView", {})
                }}
                ref={r => {
                  if (r) {
                    this.scrollView = r as any
                  }
                }}
              >
                {(() => {
                  switch (filter && filter.id) {
                    case "all":
                      return (
                        <AllEvents
                          cityName={cityName}
                          citySlug={citySlug}
                          key={cityName}
                          currentBucket={filter.id as BucketKey}
                          buckets={buckets}
                          sponsoredContent={this.state.sponsoredContent}
                          relay={this.state.relay}
                        />
                      )
                    default:
                      return (
                        <EventList
                          key={cityName + filter.id}
                          bucket={buckets[filter.id]}
                          type={filter.id as any}
                          relay={this.state.relay}
                          cityName={cityName}
                        />
                      )
                  }
                })()}
              </ScrollView>
            </Box>
          </>
        </Theme>
      )
    )
  }
}

const Handle = styled.View`
  width: 40px;
  height: 5px;
  border-radius: 2.5px;
  background-color: ${color("black30")};
`
