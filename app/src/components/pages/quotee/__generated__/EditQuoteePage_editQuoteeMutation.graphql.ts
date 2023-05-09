/**
 * @generated SignedSource<<d26a33461e042ac9cb73802d7d71ccd3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateQuoteeInput = {
  name: string;
};
export type EditQuoteePage_editQuoteeMutation$variables = {
  input: UpdateQuoteeInput;
  quoteeId: string;
};
export type EditQuoteePage_editQuoteeMutation$data = {
  readonly updateQuotee: {
    readonly quotee: {
      readonly id: string;
      readonly name: string;
    } | null;
  };
};
export type EditQuoteePage_editQuoteeMutation = {
  response: EditQuoteePage_editQuoteeMutation$data;
  variables: EditQuoteePage_editQuoteeMutation$variables;
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
  "name": "quoteeId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "quoteeId"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateQuoteePayload",
    "kind": "LinkedField",
    "name": "updateQuotee",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Quotee",
        "kind": "LinkedField",
        "name": "quotee",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditQuoteePage_editQuoteeMutation",
    "selections": (v2/*: any*/),
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
    "name": "EditQuoteePage_editQuoteeMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f26b8a028ca21cd747defa195f57ee3e",
    "id": null,
    "metadata": {},
    "name": "EditQuoteePage_editQuoteeMutation",
    "operationKind": "mutation",
    "text": "mutation EditQuoteePage_editQuoteeMutation(\n  $quoteeId: ID!\n  $input: UpdateQuoteeInput!\n) {\n  updateQuotee(id: $quoteeId, input: $input) {\n    quotee {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "81dcbd22469dc5f9b9127a4092bdb5e6";

export default node;
