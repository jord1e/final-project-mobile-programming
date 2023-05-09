/**
 * @generated SignedSource<<4887ee04f72ad42a7a34de0e9802879d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MyQuoteListsPage_deleteQuoteListMutation$variables = {
  quoteListId: string;
};
export type MyQuoteListsPage_deleteQuoteListMutation$data = {
  readonly deleteQuoteList: {
    readonly userErrors: ReadonlyArray<{
      readonly message: string;
    }>;
  };
};
export type MyQuoteListsPage_deleteQuoteListMutation = {
  response: MyQuoteListsPage_deleteQuoteListMutation$data;
  variables: MyQuoteListsPage_deleteQuoteListMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "quoteListId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "quoteListId",
        "variableName": "quoteListId"
      }
    ],
    "concreteType": "DeleteQuoteListPayload",
    "kind": "LinkedField",
    "name": "deleteQuoteList",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DeleteQuoteListError",
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
    "name": "MyQuoteListsPage_deleteQuoteListMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MyQuoteListsPage_deleteQuoteListMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "68941b0dd4e068dd0b213a1a07d5152c",
    "id": null,
    "metadata": {},
    "name": "MyQuoteListsPage_deleteQuoteListMutation",
    "operationKind": "mutation",
    "text": "mutation MyQuoteListsPage_deleteQuoteListMutation(\n  $quoteListId: ID!\n) {\n  deleteQuoteList(quoteListId: $quoteListId) {\n    userErrors {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c060eb10807e147aac8f0bcc67cf188f";

export default node;
