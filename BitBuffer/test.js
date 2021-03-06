/**
 * Copyright 2013 Observit AB
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

var assert = require('assert'), BitBuffer = require('./bitbuffer');

describe('Basic functions with BitBuffer', function() {

	it('Read first bit (0) of a byte as active i.e. 128', function() {
		var buffer = new Buffer(1);
		buffer.writeUInt8(128, 0);
		var bb = new BitBuffer(buffer);

		assert.equal(1, bb.read());
	});
	
	it('Read last bit (7) of a byte as active i.e. 1', function() {
		var buffer = new Buffer(1);
		buffer.writeUInt8(1, 0);
		var bb = new BitBuffer(buffer);

		bb.setPosition(7);
		assert.equal(1, bb.read());
	});
	
	it('Write 128 to a single byte and compare binary string b80', function() {
		var buffer = new Buffer(1);
		buffer.writeUInt8(0, 0);
		var bb = new BitBuffer(buffer);

		bb.write(128, 8);
		assert.equal("80", bb.getBuffer().toString('hex'));
	});
});
