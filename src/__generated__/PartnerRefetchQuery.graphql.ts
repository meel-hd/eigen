/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PartnerRefetchQueryVariables = {
    id: string;
};
export type PartnerRefetchQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"Partner_partner">;
    } | null;
};
export type PartnerRefetchQuery = {
    readonly response: PartnerRefetchQueryResponse;
    readonly variables: PartnerRefetchQueryVariables;
};



/*
query PartnerRefetchQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...Partner_partner
    id
  }
}

fragment Partner_partner on Partner {
  id
  name
  slug
  profile {
    id
    isFollowed
    internalID
  }
  locations {
    city
    id
  }
  ...PartnerArtwork_partner
  ...PartnerOverview_partner
  ...PartnerShows_partner
}

fragment PartnerArtwork_partner on Partner {
  internalID
  artworks: artworksConnection(first: 6) {
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      node {
        ...GenericGrid_artworks
        id
        __typename
      }
      cursor
    }
  }
}

fragment PartnerOverview_partner on Partner {
  internalID
  website
  locations {
    city
    id
  }
  profile {
    bio
    id
  }
  artists: artistsConnection(representedBy: true, sort: SORTABLE_ID_ASC, first: 10) {
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        internalID
        slug
        name
        initials
        href
        is_followed: isFollowed
        nationality
        birthday
        deathday
        image {
          url
        }
        ...ArtistListItem_artist
        __typename
      }
      cursor
      id
    }
  }
}

fragment PartnerShows_partner on Partner {
  slug
  internalID
  currentAndUpcomingShows: showsConnection(sort: START_AT_ASC, first: 10) {
    edges {
      node {
        id
        internalID
        slug
        name
        exhibitionPeriod
        endAt
        images {
          url
        }
        partner {
          __typename
          ... on Partner {
            name
          }
          ... on Node {
            id
          }
          ... on ExternalPartner {
            id
          }
        }
        ...ShowItem_show
      }
    }
  }
  pastShows: showsConnection(sort: END_AT_ASC, first: 6) {
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        name
        slug
        exhibitionPeriod
        coverImage {
          url
          aspectRatio
        }
        href
        __typename
      }
      cursor
    }
  }
}

fragment ShowItem_show on Show {
  internalID
  slug
  name
  exhibitionPeriod
  endAt
  images {
    url
  }
  partner {
    __typename
    ... on Partner {
      name
    }
    ... on Node {
      id
    }
    ... on ExternalPartner {
      id
    }
  }
}

fragment ArtistListItem_artist on Artist {
  id
  internalID
  slug
  name
  initials
  href
  is_followed: isFollowed
  nationality
  birthday
  deathday
  image {
    url
  }
}

fragment GenericGrid_artworks on Artwork {
  id
  image {
    aspect_ratio: aspectRatio
  }
  ...ArtworkGridItem_artwork
}

fragment ArtworkGridItem_artwork on Artwork {
  title
  date
  sale_message: saleMessage
  is_biddable: isBiddable
  is_acquireable: isAcquireable
  is_offerable: isOfferable
  slug
  sale {
    is_auction: isAuction
    is_closed: isClosed
    display_timely_at: displayTimelyAt
    id
  }
  sale_artwork: saleArtwork {
    current_bid: currentBid {
      display
    }
    id
  }
  image {
    url(version: "large")
    aspect_ratio: aspectRatio
  }
  artists(shallow: true) {
    name
    id
  }
  partner {
    name
    id
  }
  href
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "Literal",
  "name": "first",
  "value": 6
},
v8 = [
  (v7/*: any*/)
],
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "startCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    }
  ]
},
v10 = [
  (v4/*: any*/),
  (v3/*: any*/)
],
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v14 = [
  (v13/*: any*/),
  {
    "kind": "Literal",
    "name": "representedBy",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "SORTABLE_ID_ASC"
  }
],
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v16 = [
  (v15/*: any*/)
],
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "exhibitionPeriod",
  "args": null,
  "storageKey": null
},
v18 = [
  (v7/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "END_AT_ASC"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PartnerRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Partner_partner",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PartnerRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "Partner",
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "profile",
                "storageKey": null,
                "args": null,
                "concreteType": "Profile",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isFollowed",
                    "args": null,
                    "storageKey": null
                  },
                  (v6/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "bio",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "locations",
                "storageKey": null,
                "args": null,
                "concreteType": "Location",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "city",
                    "args": null,
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ]
              },
              (v6/*: any*/),
              {
                "kind": "LinkedField",
                "alias": "artworks",
                "name": "artworksConnection",
                "storageKey": "artworksConnection(first:6)",
                "args": (v8/*: any*/),
                "concreteType": "ArtworkConnection",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtworkEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "image",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": "aspect_ratio",
                                "name": "aspectRatio",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "url",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "version",
                                    "value": "large"
                                  }
                                ],
                                "storageKey": "url(version:\"large\")"
                              }
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "title",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "date",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "sale_message",
                            "name": "saleMessage",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "is_biddable",
                            "name": "isBiddable",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "is_acquireable",
                            "name": "isAcquireable",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "is_offerable",
                            "name": "isOfferable",
                            "args": null,
                            "storageKey": null
                          },
                          (v5/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sale",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Sale",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": "is_auction",
                                "name": "isAuction",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": "is_closed",
                                "name": "isClosed",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": "display_timely_at",
                                "name": "displayTimelyAt",
                                "args": null,
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": "sale_artwork",
                            "name": "saleArtwork",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SaleArtwork",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": "current_bid",
                                "name": "currentBid",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SaleArtworkCurrentBid",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "display",
                                    "args": null,
                                    "storageKey": null
                                  }
                                ]
                              },
                              (v3/*: any*/)
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "artists",
                            "storageKey": "artists(shallow:true)",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "shallow",
                                "value": true
                              }
                            ],
                            "concreteType": "Artist",
                            "plural": true,
                            "selections": (v10/*: any*/)
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "partner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Partner",
                            "plural": false,
                            "selections": (v10/*: any*/)
                          },
                          (v11/*: any*/),
                          (v2/*: any*/)
                        ]
                      },
                      (v12/*: any*/)
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": "artworks",
                "name": "artworksConnection",
                "args": (v8/*: any*/),
                "handle": "connection",
                "key": "Partner_artworks",
                "filters": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "website",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": "artists",
                "name": "artistsConnection",
                "storageKey": "artistsConnection(first:10,representedBy:true,sort:\"SORTABLE_ID_ASC\")",
                "args": (v14/*: any*/),
                "concreteType": "ArtistPartnerConnection",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtistPartnerEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artist",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v6/*: any*/),
                          (v5/*: any*/),
                          (v4/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "initials",
                            "args": null,
                            "storageKey": null
                          },
                          (v11/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": "is_followed",
                            "name": "isFollowed",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "nationality",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "birthday",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "deathday",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "image",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": (v16/*: any*/)
                          },
                          (v2/*: any*/)
                        ]
                      },
                      (v12/*: any*/),
                      (v3/*: any*/)
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": "artists",
                "name": "artistsConnection",
                "args": (v14/*: any*/),
                "handle": "connection",
                "key": "Partner_artists",
                "filters": [
                  "representedBy",
                  "sort"
                ]
              },
              {
                "kind": "LinkedField",
                "alias": "currentAndUpcomingShows",
                "name": "showsConnection",
                "storageKey": "showsConnection(first:10,sort:\"START_AT_ASC\")",
                "args": [
                  (v13/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "sort",
                    "value": "START_AT_ASC"
                  }
                ],
                "concreteType": "ShowConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ShowEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Show",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v6/*: any*/),
                          (v5/*: any*/),
                          (v4/*: any*/),
                          (v17/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "endAt",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "images",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": true,
                            "selections": (v16/*: any*/)
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "partner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": null,
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v3/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "type": "Partner",
                                "selections": [
                                  (v4/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": "pastShows",
                "name": "showsConnection",
                "storageKey": "showsConnection(first:6,sort:\"END_AT_ASC\")",
                "args": (v18/*: any*/),
                "concreteType": "ShowConnection",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ShowEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Show",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v17/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "coverImage",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              (v15/*: any*/),
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "aspectRatio",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          (v11/*: any*/),
                          (v2/*: any*/)
                        ]
                      },
                      (v12/*: any*/)
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": "pastShows",
                "name": "showsConnection",
                "args": (v18/*: any*/),
                "handle": "connection",
                "key": "Partner_pastShows",
                "filters": [
                  "sort"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PartnerRefetchQuery",
    "id": "55a24f955662396889b331d873cba4f7",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'a625a7dd6ff99c5930a434fb7e958e85';
export default node;
