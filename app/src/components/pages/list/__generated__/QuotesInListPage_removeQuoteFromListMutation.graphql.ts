/**
 * @generated SignedSource<<39b04bffeec522b0c37c3ed73aee46e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuotesInListPage_removeQuoteFromListMutation$variables = {
  quoteId: string;
  quoteListId: string;
};
export type QuotesInListPage_removeQuoteFromListMutation$data = {
  readonly updateQuoteList: {
    readonly quoteList: {
      readonly " $fragmentSpreads": FragmentRefs<"QuoteListCard_quoteList">;
    } | null;
    readonly userErrors: ReadonlyArray<{
      readonly message: string;
    }>;
  };
};
export type QuotesInListPage_removeQuoteFromListMutation = {
  response: QuotesInListPage_removeQuoteFromListMutation$data;
  variables: QuotesInListPage_removeQuoteFromListMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "quoteId"
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
    "fields": [
      {
        "items": [
          {
            "kind": "Variable",
            "name": "removeQuotes.0",
            "variableName": "quoteId"
          }
        ],
        "kind": "ListValue",
        "name": "removeQuotes"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "UpdateQuoteListError",
  "kind": "LinkedField",
  "name": "userErrors",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
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
    "name": "QuotesInListPage_removeQuoteFromListMutation",
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "QuoteListCard_quoteList"
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
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
    "name": "QuotesInListPage_removeQuoteFromListMutation",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "size",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "99bac9c1b93c1e546688a4393060609d",
    "id": null,
    "metadata": {},
    "name": "QuotesInListPage_removeQuoteFromListMutation",
    "operationKind": "mutation",
    "text": "mutation QuotesInListPage_removeQuoteFromListMutation(\n  $quoteListId: ID!\n  $quoteId: ID!\n) {\n  updateQuoteList(id: $quoteListId, input: {removeQuotes: [$quoteId]}) {\n    quoteList {\n      ...QuoteListCard_quoteList\n      id\n    }\n    userErrors {\n      message\n    }\n  }\n}\n\nfragment QuoteListCard_quoteList on ShareableQuoteList {\n  id\n  name\n  size\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "c11d1f1ec5b87431c46e4085068fc858";

export default node;
