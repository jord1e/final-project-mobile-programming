/**
 * @generated SignedSource<<5e4aace0fdff635c1f44a58ee3d6a0aa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuoteCardList_quotes$data = {
  readonly quotes: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"QuoteCard_quote">;
  }>;
  readonly " $fragmentType": "QuoteCardList_quotes";
};
export type QuoteCardList_quotes$key = {
  readonly " $data"?: QuoteCardList_quotes$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuoteCardList_quotes">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuoteCardList_quotes",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Quote",
      "kind": "LinkedField",
      "name": "quotes",
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
          "name": "QuoteCard_quote"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "QuoteList",
  "abstractKey": "__isQuoteList"
};

(node as any).hash = "3a419b78e430d6258962257c25ad1f40";

export default node;
