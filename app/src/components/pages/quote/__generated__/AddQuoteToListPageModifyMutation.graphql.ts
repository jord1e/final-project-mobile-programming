/**
 * @generated SignedSource<<0d7b5ba33060fe29a50ae5a57b2d3460>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateQuoteListInput = {
  addQuotes?: ReadonlyArray<string> | null;
  name?: string | null;
  removeQuotes?: ReadonlyArray<string> | null;
};
export type AddQuoteToListPageModifyMutation$variables = {
  input: UpdateQuoteListInput;
  quoteListId: string;
};
export type AddQuoteToListPageModifyMutation$data = {
  readonly updateQuoteList: {
    readonly quoteList: {
      readonly id: string;
      readonly name: string;
      readonly quotes: ReadonlyArray<{
        readonly id: string;
      }>;
      readonly size: number;
      readonly " $fragmentSpreads": FragmentRefs<"QuoteCardList_quotes">;
    } | null;
  };
};
export type AddQuoteToListPageModifyMutation = {
  response: AddQuoteToListPageModifyMutation$data;
  variables: AddQuoteToListPageModifyMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "quoteListId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "quoteListId"
  },
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "size",
  "storageKey": null
},
v6 = [
  (v3/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Quote",
  "kind": "LinkedField",
  "name": "quotes",
  "plural": true,
  "selections": (v6/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddQuoteToListPageModifyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "UpdateQuoteListPayload",
        "kind": "LinkedField",
        "name": "updateQuoteList",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ShareableQuoteList",
            "kind": "LinkedField",
            "name": "quoteList",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v7/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "QuoteCardList_quotes"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddQuoteToListPageModifyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "UpdateQuoteListPayload",
        "kind": "LinkedField",
        "name": "updateQuoteList",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ShareableQuoteList",
            "kind": "LinkedField",
            "name": "quoteList",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v7/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Quote",
                    "kind": "LinkedField",
                    "name": "quotes",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "quoteText",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "quoteDate",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "locationText",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Quotee",
                        "kind": "LinkedField",
                        "name": "quotees",
                        "plural": true,
                        "selections": (v6/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "QuoteList",
                "abstractKey": "__isQuoteList"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8607bef21da22fed3a17dad9e1513a6a",
    "id": null,
    "metadata": {},
    "name": "AddQuoteToListPageModifyMutation",
    "operationKind": "mutation",
    "text": "mutation AddQuoteToListPageModifyMutation(\n  $quoteListId: ID!\n  $input: UpdateQuoteListInput!\n) {\n  updateQuoteList(id: $quoteListId, input: $input) {\n    quoteList {\n      id\n      name\n      size\n      quotes {\n        id\n      }\n      ...QuoteCardList_quotes\n    }\n  }\n}\n\nfragment QuoteCardList_quotes on QuoteList {\n  __isQuoteList: __typename\n  quotes {\n    id\n    ...QuoteCard_quote\n  }\n}\n\nfragment QuoteCard_quote on Quote {\n  id\n  quoteText\n  quoteDate\n  locationText\n  quotees {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "130a9fe8b84b83b89af63e0b6005a6e1";

export default node;
