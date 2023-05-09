/**
 * @generated SignedSource<<c20f5be7877e40b24972fceb1158fa08>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MyQuoteesPage_deleteQuoteeMutation$variables = {
  quoteeId: string;
};
export type MyQuoteesPage_deleteQuoteeMutation$data = {
  readonly deleteQuotee: {
    readonly userErrors: ReadonlyArray<{
      readonly message: string;
    }>;
  };
};
export type MyQuoteesPage_deleteQuoteeMutation = {
  response: MyQuoteesPage_deleteQuoteeMutation$data;
  variables: MyQuoteesPage_deleteQuoteeMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "quoteeId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "quoteeId",
        "variableName": "quoteeId"
      }
    ],
    "concreteType": "DeleteQuoteePayload",
    "kind": "LinkedField",
    "name": "deleteQuotee",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DeleteQuoteeError",
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
    "name": "MyQuoteesPage_deleteQuoteeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MyQuoteesPage_deleteQuoteeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0f80d4e23a03b5651b5424783b7a4c2c",
    "id": null,
    "metadata": {},
    "name": "MyQuoteesPage_deleteQuoteeMutation",
    "operationKind": "mutation",
    "text": "mutation MyQuoteesPage_deleteQuoteeMutation(\n  $quoteeId: ID!\n) {\n  deleteQuotee(quoteeId: $quoteeId) {\n    userErrors {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d52cda4b1823989008c87f4d974a8e5f";

export default node;
