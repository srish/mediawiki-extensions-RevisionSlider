( function ( mw ) {
	var PointerView = mw.libs.revisionSlider.PointerView;

	QUnit.module( 'ext.RevisionSlider.PointerView' );

	QUnit.test( 'Initialize PointerView', function ( assert ) {
		assert.ok( ( new PointerView( null, 'mw-revslider-pointer' ) ).render().hasClass( 'mw-pointer' ) );
	} );

	QUnit.test( 'Is upper pointer', function ( assert ) {
		var pv = new PointerView( null, 'mw-revslider-pointer' );
		pv.render();
		assert.notOk( pv.isUpperPointer() );

		pv.getElement().addClass( 'mw-upper-pointer' );
		assert.ok( pv.isUpperPointer() );
	} );

	QUnit.test( 'Has offset', function ( assert ) {
		var pv = new PointerView( null, 'mw-revslider-pointer' );
		pv.render();
		assert.equal( pv.getOffset(), 0 );

		pv.getElement().addClass( 'mw-upper-pointer' );
		assert.equal( pv.getOffset(), 16 );
	} );
} )( mediaWiki );