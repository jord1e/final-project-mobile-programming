/**
 * @generated SignedSource<<8776e6d0d13002fd1067e96b56786cd4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuoteeCardList_quotees$data = {
  readonly quotees: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"QuoteeCard_data">;
  }>;
  readonly " $fragmentType": "QuoteeCardList_quotees";
};
export type QuoteeCardList_quotees$key = {
  readonly " $data"?: QuoteeCardList_quotees$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuoteeCardList_quotees">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuoteeCardList_quotees",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Quotee",
      "kind": "LinkedField",
      "name": "quotees",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "QuoteeCard_data"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "9d825dbafb9976fb375e4071180070df";

export default node;
