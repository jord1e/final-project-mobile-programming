/**
 * @generated SignedSource<<2d7983d258a7b7e68bcc950683232338>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateQuoteListInput = {
  name: string;
};
export type CreateQuoteListPage_createQuoteListMutation$variables = {
  input: CreateQuoteListInput;
};
export type CreateQuoteListPage_createQuoteListMutation$data = {
  readonly createQuoteList: {
    readonly quoteList: {
      readonly id: string;
      readonly name: string;
    } | null;
  };
};
export type CreateQuoteListPage_createQuoteListMutation = {
  response: CreateQuoteListPage_createQuoteListMutation$data;
  variables: CreateQuoteListPage_createQuoteListMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateQuoteListPayload",
    "kind": "LinkedField",
    "name": "createQuoteList",
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
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateQuoteListPage_createQuoteListMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateQuoteListPage_createQuoteListMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e9437a01663d2f3168bb7e9ceb7f2414",
    "id": null,
    "metadata": {},
    "name": "CreateQuoteListPage_createQuoteListMutation",
    "operationKind": "mutation",
    "text": "mutation CreateQuoteListPage_createQuoteListMutation(\n  $input: CreateQuoteListInput!\n) {\n  createQuoteList(input: $input) {\n    quoteList {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c7e7dbb5db96aee9330440e2824d3613";

export default node;
