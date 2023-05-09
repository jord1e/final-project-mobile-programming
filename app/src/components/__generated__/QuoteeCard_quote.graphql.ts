/**
 * @generated SignedSource<<e521db3a424d47883dcac40986647626>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuoteeCard_quote$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "QuoteeCard_quote";
};
export type QuoteeCard_quote$key = {
  readonly " $data"?: QuoteeCard_quote$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuoteeCard_quote">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuoteeCard_quote",
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

(node as any).hash = "dbd4d5aeeed11a783f5db0d80952613a";

export default node;
