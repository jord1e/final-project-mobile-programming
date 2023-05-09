/**
 * @generated SignedSource<<dd14d8dd837d867f3e1a8e87f7bb83c9>>
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
export type UpdateQuoteeToQuotePageModifyMutation$variables = {
  input: UpdateQuoteInput;
  quoteId: string;
};
export type UpdateQuoteeToQuotePageModifyMutation$data = {
  readonly updateQuote: {
    readonly quote: {
      readonly quotees: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      }>;
    } | null;
  };
};
export type UpdateQuoteeToQuotePageModifyMutation = {
  response: UpdateQuoteeToQuotePageModifyMutation$data;
  variables: UpdateQuoteeToQuotePageModifyMutation$variables;
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
  "concreteType": "Quotee",
  "kind": "LinkedField",
  "name": "quotees",
  "plural": true,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
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
    "name": "UpdateQuoteeToQuotePageModifyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
              (v4/*: any*/)
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
    "name": "UpdateQuoteeToQuotePageModifyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
              (v4/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "77ef53a0c5d73ddb8fcfac697675aa96",
    "id": null,
    "metadata": {},
    "name": "UpdateQuoteeToQuotePageModifyMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateQuoteeToQuotePageModifyMutation(\n  $quoteId: ID!\n  $input: UpdateQuoteInput!\n) {\n  updateQuote(id: $quoteId, input: $input) {\n    quote {\n      quotees {\n        id\n        name\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ec5abfda79507def4dea531d1093e5e4";

export default node;
