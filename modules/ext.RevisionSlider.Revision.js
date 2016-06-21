( function ( mw, $ ) {
	/*global moment:false */
	/**
	 * @param {Object} data - Containing keys `id`, `size`, `comment`, `parsedcomment`, `timestamp`, `user` and `minor`
	 * @constructor
	 */
	var Revision = function ( data ) {
		this.id = data.revid;
		this.size = data.size;
		this.comment = data.comment;
		this.parsedComment = data.parsedcomment;
		this.timestamp = data.timestamp;
		this.user = data.user;
		this.minor = data.hasOwnProperty( 'minor' ) && ( data.minor || data.minor === '' );
	};

	$.extend( Revision.prototype, {
		/**
		 * @type {number}
		 */
		id: 0,

		/**
		 * @type {number}
		 */
		size: 0,

		/**
		 * @type {string}
		 */
		comment: '',

		/**
		 * @type {boolean}
		 */
		minor: false,

		/**
		 * @type {string}
		 */
		parsedComment: '',

		/**
		 * @type {string}
		 */
		timestamp: '',

		/**
		 * @type {string}
		 */
		user: '',

		/**
		 * @type {number}
		 */
		relativeSize: 0,

		/**
		 * @return {number}
		 */
		getId: function () {
			return this.id;
		},

		/**
		 * @return {number}
		 */
		getSize: function () {
			return this.size;
		},

		/**
		 * @return {boolean}
		 */
		isMinor: function () {
			return this.minor;
		},

		/**
		 * @return {string}
		 */
		getParsedComment: function () {
			return this.parsedComment;
		},

		/**
		 * @return {boolean}
		 */
		hasEmptyComment: function () {
			return this.getComment().trim().length === 0;
		},

		/**
		 * @return {string}
		 */
		getComment: function () {
			return this.comment;
		},

		/**
		 * Uses moment.js to format the date
		 *
		 * @param {string} rawDate
		 * @return {string}
		 */
		formatDate: function ( rawDate ) {
			// Moment's offset works "backwards", as the number of minutes
			// behind UTC, so we need to make this number negative
			var offset = -mw.libs.revisionSlider.userOffset;
			return moment( rawDate ).zone( offset ).format( 'HH:mm, D MMM YYYY' );
		},

		/**
		 * @return {string}
		 */
		getFormattedDate: function () {
			return this.formatDate( this.timestamp );
		},

		/**
		 * @return {string}
		 */
		getUser: function () {
			return this.user;
		},

		/**
		 * @param {number} size
		 */
		setRelativeSize: function ( size ) {
			this.relativeSize = size;
		},

		/**
		 * @return {number}
		 */
		getRelativeSize: function () {
			return this.relativeSize;
		}
	} );

	mw.libs.revisionSlider = mw.libs.revisionSlider || {};
	mw.libs.revisionSlider.Revision = Revision;
}( mediaWiki, jQuery ) );
