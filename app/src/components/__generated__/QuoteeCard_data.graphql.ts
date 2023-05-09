/**
 * @generated SignedSource<<d61ace3c0f0a00442f024a17533d5acd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuoteeCard_data$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "QuoteeCard_data";
};
export type QuoteeCard_data$key = {
  readonly " $data"?: QuoteeCard_data$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuoteeCard_data">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuoteeCard_data",
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
  "type": "Quotee",
  "abstractKey": null
};

(node as any).hash = "eaa7d3051005b32e20816cf0db9a2d25";

export default node;
