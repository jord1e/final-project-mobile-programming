/**
 * @generated SignedSource<<4d958c2dbc75fccc2e7b5a055a52a381>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuoteListCard_quoteList$data = {
  readonly createdAt: any;
  readonly id: string;
  readonly name: string;
  readonly size: number;
  readonly " $fragmentType": "QuoteListCard_quoteList";
};
export type QuoteListCard_quoteList$key = {
  readonly " $data"?: QuoteListCard_quoteList$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuoteListCard_quoteList">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuoteListCard_quoteList",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    }
  ],
  "type": "ShareableQuoteList",
  "abstractKey": null
};

(node as any).hash = "5657c029761b06202619b62b4b962220";

export default node;
