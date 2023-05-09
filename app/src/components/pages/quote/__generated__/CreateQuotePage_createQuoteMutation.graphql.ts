/**
 * @generated SignedSource<<9ac15f23e535fbdd1f19563e6a073113>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateQuoteInput = {
  locationText?: string | null;
  quoteContext?: string | null;
  quoteDate: any;
  quoteText: string;
  quoteeIds?: ReadonlyArray<string> | null;
};
export type CreateQuotePage_createQuoteMutation$variables = {
  input: CreateQuoteInput;
};
export type CreateQuotePage_createQuoteMutation$data = {
  readonly createQuote: {
    readonly quote: {
      readonly createdAt: any;
      readonly id: string;
      readonly locationText: string | null;
      readonly quoteContext: string | null;
      readonly quoteText: string;
    } | null;
  };
};
export type CreateQuotePage_createQuoteMutation = {
  response: CreateQuotePage_createQuoteMutation$data;
  variables: CreateQuotePage_createQuoteMutation$variables;
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
    "concreteType": "CreateQuotePayload",
    "kind": "LinkedField",
    "name": "createQuote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Quote",
        "kind": "LinkedField",
        "name": "quote",
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
            "name": "createdAt",
            "storageKey": null
          },
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
            "name": "locationText",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "quoteContext",
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
    "name": "CreateQuotePage_createQuoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateQuotePage_createQuoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f7bed9889f70a0265564cff1108a2dc1",
    "id": null,
    "metadata": {},
    "name": "CreateQuotePage_createQuoteMutation",
    "operationKind": "mutation",
    "text": "mutation CreateQuotePage_createQuoteMutation(\n  $input: CreateQuoteInput!\n) {\n  createQuote(input: $input) {\n    quote {\n      id\n      createdAt\n      quoteText\n      locationText\n      quoteContext\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6752e4d8a4b686ce5249e91fd7064547";

export default node;
