/**
 * @generated SignedSource<<5a92e96e7a5f877a3eedd74fce4380a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MyQuotesPage_deleteQuoteMutation$variables = {
  quoteId: string;
};
export type MyQuotesPage_deleteQuoteMutation$data = {
  readonly deleteQuote: {
    readonly userErrors: ReadonlyArray<{
      readonly message: string;
    }>;
  };
};
export type MyQuotesPage_deleteQuoteMutation = {
  response: MyQuotesPage_deleteQuoteMutation$data;
  variables: MyQuotesPage_deleteQuoteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "quoteId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "quoteId",
        "variableName": "quoteId"
      }
    ],
    "concreteType": "DeleteQuotePayload",
    "kind": "LinkedField",
    "name": "deleteQuote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DeleteQuoteError",
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
    "name": "MyQuotesPage_deleteQuoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MyQuotesPage_deleteQuoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "55ea60dd6207ddb7302bf4305537b6cc",
    "id": null,
    "metadata": {},
    "name": "MyQuotesPage_deleteQuoteMutation",
    "operationKind": "mutation",
    "text": "mutation MyQuotesPage_deleteQuoteMutation(\n  $quoteId: ID!\n) {\n  deleteQuote(quoteId: $quoteId) {\n    userErrors {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f8b1b199f4ac13a1ec2a9d67b6e75da8";

export default node;
