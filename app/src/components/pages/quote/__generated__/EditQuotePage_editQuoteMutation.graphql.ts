/**
 * @generated SignedSource<<35b49ba20d0de89b8f95ebb7f2431ddf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateQuoteInput = {
  locationText?: string | null;
  quoteContext?: string | null;
  quoteDate?: any | null;
  quoteText?: string | null;
  quotees?: UpdateQuoteQuoteeInput | null;
};
export type UpdateQuoteQuoteeInput = {
  add?: ReadonlyArray<string> | null;
  remove?: ReadonlyArray<string> | null;
};
export type EditQuotePage_editQuoteMutation$variables = {
  input: UpdateQuoteInput;
  quoteId: string;
};
export type EditQuotePage_editQuoteMutation$data = {
  readonly updateQuote: {
    readonly quote: {
      readonly id: string;
      readonly locationText: string | null;
      readonly quoteContext: string | null;
      readonly quoteDate: any;
      readonly quoteText: string;
    } | null;
  };
};
export type EditQuotePage_editQuoteMutation = {
  response: EditQuotePage_editQuoteMutation$data;
  variables: EditQuotePage_editQuoteMutation$variables;
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
  "name": "quoteId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "quoteId"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateQuotePayload",
    "kind": "LinkedField",
    "name": "updateQuote",
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
            "name": "quoteDate",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditQuotePage_editQuoteMutation",
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
    "name": "EditQuotePage_editQuoteMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "3b34a916025039260bbf8dbcc6e885a2",
    "id": null,
    "metadata": {},
    "name": "EditQuotePage_editQuoteMutation",
    "operationKind": "mutation",
    "text": "mutation EditQuotePage_editQuoteMutation(\n  $quoteId: ID!\n  $input: UpdateQuoteInput!\n) {\n  updateQuote(id: $quoteId, input: $input) {\n    quote {\n      id\n      quoteDate\n      quoteText\n      locationText\n      quoteContext\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2237e5a3287d06dc89349a3d12844066";

export default node;
