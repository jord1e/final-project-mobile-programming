/**
 * @generated SignedSource<<eddca10054a0d942ad6c7154be577799>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateQuoteeInput = {
  name: string;
};
export type CreateQuoteePage_createQuoteeMutation$variables = {
  input: CreateQuoteeInput;
};
export type CreateQuoteePage_createQuoteeMutation$data = {
  readonly createQuotee: {
    readonly quotee: {
      readonly id: string;
      readonly name: string;
    } | null;
  };
};
export type CreateQuoteePage_createQuoteeMutation = {
  response: CreateQuoteePage_createQuoteeMutation$data;
  variables: CreateQuoteePage_createQuoteeMutation$variables;
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
    "concreteType": "CreateQuoteePayload",
    "kind": "LinkedField",
    "name": "createQuotee",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateQuoteePage_createQuoteeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateQuoteePage_createQuoteeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e501b249758b627614b2c420663009d8",
    "id": null,
    "metadata": {},
    "name": "CreateQuoteePage_createQuoteeMutation",
    "operationKind": "mutation",
    "text": "mutation CreateQuoteePage_createQuoteeMutation(\n  $input: CreateQuoteeInput!\n) {\n  createQuotee(input: $input) {\n    quotee {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0ad6f808bd2bf3af25d590025a181906";

export default node;
