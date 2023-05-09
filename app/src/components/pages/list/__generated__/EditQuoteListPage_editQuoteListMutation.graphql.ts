/**
 * @generated SignedSource<<b3759d775c4ab6fa42f4636b727795a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateQuoteListInput = {
  addQuotes?: ReadonlyArray<string> | null;
  name?: string | null;
  removeQuotes?: ReadonlyArray<string> | null;
};
export type EditQuoteListPage_editQuoteListMutation$variables = {
  input: UpdateQuoteListInput;
  quoteListId: string;
};
export type EditQuoteListPage_editQuoteListMutation$data = {
  readonly updateQuoteList: {
    readonly quoteList: {
      readonly id: string;
      readonly name: string;
      readonly size: number;
    } | null;
  };
};
export type EditQuoteListPage_editQuoteListMutation = {
  response: EditQuoteListPage_editQuoteListMutation$data;
  variables: EditQuoteListPage_editQuoteListMutation$variables;
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
    "alias": null,
    "args": [
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
    "name": "EditQuoteListPage_editQuoteListMutation",
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
    "name": "EditQuoteListPage_editQuoteListMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b4a7e974433e007956a93ccdfe26bd16",
    "id": null,
    "metadata": {},
    "name": "EditQuoteListPage_editQuoteListMutation",
    "operationKind": "mutation",
    "text": "mutation EditQuoteListPage_editQuoteListMutation(\n  $quoteListId: ID!\n  $input: UpdateQuoteListInput!\n) {\n  updateQuoteList(id: $quoteListId, input: $input) {\n    quoteList {\n      id\n      name\n      size\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "989a835f30d597c9bb1eec23bec3c4c8";

export default node;
