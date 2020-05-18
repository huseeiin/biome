/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {test} from "rome";
import {testLintMultiple} from "../testHelpers";

test(
	"ensure style property is an object",
	async (t) => {
		await testLintMultiple(
			t,
			[
				// INVALID
				"<div style={true} />",
				`<div style="color: 'red'" />`,
				`<div style={"color: 'red'"} />`,
				// VALID
				"<div style={{color: 'red'}} />",
			],
			{category: "lint/react/stylePropObject"},
		);
	},
);
