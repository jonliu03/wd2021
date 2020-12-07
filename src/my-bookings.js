import {session} from 'wix-storage';
import wixLocation from 'wix-location';
import wixWindow from 'wix-window';
$w.onReady(function () {
	session.setItem("selItem", -1)
});
export function table1_rowSelect(event, $w) {
	$w('#button22').enable();
	$w('#button21').enable();
	let rowData = event.rowData;
	let rowIndex = event.rowIndex;
	session.setItem("selItem", rowIndex)
	console.log(rowIndex)
}
export function button22_click(event) {
	if (session.getItem("selItem") !== -1) {
		let items;
		$w("#dataset1").getItems(0, $w('#dataset1').getTotalCount()).then( (result) => {
    	items = result.items;
   	 	let totalCount = result.totalCount;
		console.log(parseInt(session.getItem("selItem")))
		var obj = items[parseInt(session.getItem("selItem"))];
		$w('#button21').disable();
		$w('#button22').disable();
		wixLocation.to("/book-options#anchor" + obj.optionNum)
		console.log("/book-options#anchor" + obj.optionNum)
  		} )
	}
}
export function button21_click(event) {
	if (session.getItem("selItem") !== -1) {
		$w('#dataset1').setCurrentItemIndex(parseInt(session.getItem("selItem")));
		$w('#dataset1').remove()
		$w('#dataset1').setCurrentItemIndex($w('#dataset1').getTotalCount() - 1)
		console.log("New current item:" + $w('#dataset1').getCurrentItemIndex())
	$w('#button21').disable();
	$w('#button22').disable();
	}

}
