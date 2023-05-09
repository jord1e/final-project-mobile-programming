/**
 * @generated SignedSource<<a02fc030c034451faf689cc0d6e8d2f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuoteCard_quote$data = {
  readonly id: string;
  readonly locationText: string | null;
  readonly quoteDate: any;
  readonly quoteText: string;
  readonly quotees: ReadonlyArray<{
    readonly id: string;
  }>;
  readonly " $fragmentType": "QuoteCard_quote";
};
export type QuoteCard_quote$key = {
  readonly " $data"?: QuoteCard_quote$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuoteCard_quote">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuoteCard_quote",
  "selections": [
    (v0/*: any*/),
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
      "name": "quoteDate",
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
      "concreteType": "Quotee",
      "kind": "LinkedField",
      "name": "quotees",
      "plural": true,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Quote",
  "abstractKey": null
};
})();

(node as any).hash = "e2576e3b1e2d4716b900f33f5865c39f";

export default node;
