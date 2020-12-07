import {session} from 'wix-storage';
import wixLocation from 'wix-location';
$w.onReady(function () {

	$w('#button23').target = "_blank";
	$w('#text28').show();
	$w('#text28').collapse();
	session.setItem("first", false);
	session.setItem("date", -1);
	session.setItem("time", "");
	session.setItem("streetAddress", "")
	session.setItem("state", "")
	session.setItem("zip", "")
});
export function updateText() {
	$w('#text28').collapse();
	const options = {
		month: "long",
        day: "numeric",
        year: "numeric"
    };
	if (session.getItem("date") !== false) {
		$w('#text20').text = $w('#datePicker1').value.toLocaleDateString("en-US", options) + " " + session.getItem("time");
	}
}
export function updateText2() {
	var s1 = session.getItem("streetAddress");
	var s2 = session.getItem("state");
	var s3 = session.getItem("zip");
	var total = "";
	if (s1.length > 0) {
		total = s1;
	}
	if (s2.length > 0 && s1.length > 0) {
		total += ", " + s2;
	}
	else {
		total += s2;
	}
	if (s3.length > 0) {
		total += " " + s3;
	}
	if (total.length === 0) {
		$w('#text21').text = "No location yet.";
	}
	else {
		$w('#text21').text = total;
	}
}
export function datePicker1_change(event) {
	$w('#text28').collapse();
	session.setItem("time", "")
	enableButtons(-1)
	var todayMidnight = new Date();
	todayMidnight.setHours(23);
	todayMidnight.setMinutes(59);
	todayMidnight.setSeconds(59);
	if ($w('#datePicker1').value.getDay() === 0 ||
	$w('#datePicker1').value.getDay() === 6 ||
	$w('#datePicker1').value.getTime() < todayMidnight.getTime()) {
		session.setItem("date", -1)
		$w('#group6').expand()
		$w('#group1').collapse();
		$w('#text20').text = "No date selected."
	}
	else {
		session.setItem("date", $w('#datePicker1').value)
		updateText();
		$w('#group6').collapse()
		$w('#group1').expand();
	}
}
export function button4_click(event) {
	session.setItem("time", "10:00 am");
	$w('#button4').disable();
	enableButtons(4);
}

export function enableButtons(exception) {
	updateText();
	for (var i = 4; i < 19; i++) {
		if (i !== exception) {
			$w('#button' + i).enable();
		}
	}
}

export function button5_click(event) {
	session.setItem("time", $w('#button5').label);
	$w('#button5').disable();
	enableButtons(5);
}
export function button6_click(event) {
	session.setItem("time", $w('#button6').label);
	$w('#button6').disable();
	enableButtons(6);
}
export function button7_click(event) {
	session.setItem("time", $w('#button7').label);
	$w('#button7').disable();
	enableButtons(7);
}
export function button8_click(event) {
	session.setItem("time", $w('#button8').label);
	$w('#button8').disable();
	enableButtons(8);
}
export function button9_click(event) {
	session.setItem("time", $w('#button9').label);
	$w('#button9').disable();
	enableButtons(9);
}
export function button10_click(event) {
	session.setItem("time", $w('#button10').label);
	$w('#button10').disable();
	enableButtons(10);
}
export function button11_click(event) {
	session.setItem("time", $w('#button11').label);
	$w('#button11').disable();
	enableButtons(11);
}
export function button12_click(event) {
	session.setItem("time", $w('#button12').label);
	$w('#button12').disable();
	enableButtons(12);
}
export function button13_click(event) {
	session.setItem("time", $w('#button13').label);
	$w('#button13').disable();
	enableButtons(13);
}
export function button14_click(event) {
	session.setItem("time", $w('#button14').label);
	$w('#button14').disable();
	enableButtons(14);
}
export function button15_click(event) {
	session.setItem("time", $w('#button15').label);
	$w('#button15').disable();
	enableButtons(15);
}
export function button16_click(event) {
	session.setItem("time", $w('#button16').label);
	$w('#button16').disable();
	enableButtons(16);
}
export function button17_click(event) {
	session.setItem("time", $w('#button17').label);
	$w('#button17').disable();
	enableButtons(17);
}
export function button18_click(event) {
	session.setItem("time", $w('#button18').label);
	$w('#button18').disable();
	enableButtons(18);
}
export function button3_click(event) {
	console.log(session.getItem("date"))

	if (session.getItem("date") == -1) {
		console.log("No date");
		$w('#text28').text = "Please select a valid date."
		$w('#text28').expand();
	}
	else if (session.getItem("time").length === 0) {
		console.log("No time");
		$w('#text28').text = "Please select a time."
		$w('#text28').expand();
	}
	else {
		$w('#group1').collapse();
		$w('#group2').collapse();
		$w('#group3').expand();
		$w('#button3').hide();
		$w('#button19').show();
		$w('#button20').show();
	}

}

export function button20_click(event) {
	$w('#group3').collapse();
	$w('#group1').expand();
	$w('#group2').expand();
	$w('#button3').show();
	$w('#button19').hide();
	$w('#button20').hide();
}


export function input1_input(event) {
	$w('#text28').collapse();
	session.setItem("streetAddress", $w('#input1').value);
	updateText2();
}
export function dropdown1_change(event) {
	$w('#text28').collapse();
	session.setItem("state", $w('#dropdown1').value);
	updateText2();
}
export function input3_input(event) {
	$w('#text28').collapse();
	session.setItem("zip", $w('#input3').value);
	updateText2();
}

export function button19_click(event) {
	var s1 = session.getItem("streetAddress");
	var s2 = session.getItem("state");
	var s3 = session.getItem("zip");
	if (s1.length !== 0 && s2.length !== 0 && s3.length !== 0 && $w('#input1').valid && $w('#dropdown1').valid && $w('#input3').valid) {
		$w('#group3').collapse();
		$w('#button20').hide();
		$w('#button19').hide();
		$w('#button21').show();
		$w('#button22').show();
		$w('#group4').expand();
	}
	else {
		$w('#text28').text = "Please enter a valid address."
		$w('#text28').expand()
	}
}

export function button22_click(event) {
	$w('#group4').collapse();
	$w('#group3').expand();
	$w('#button20').show();
	$w('#button19').show();
	$w('#button21').hide();
	$w('#button22').hide();
}

export function checkbox1_change(event) {
	$w('#text28').collapse();
	if ($w('#checkbox1').checked) {
		$w('#input4').value = "";
		$w('#input5').value = "";
		$w('#input6').value = "";
		$w('#input4').disable();
		$w('#input5').disable();
		$w('#input6').disable();
	}
	else {
		$w('#input4').enable();
		$w('#input5').enable();
		$w('#input6').enable();
	}
}


export function button21_click(event) {
	if (!$w('#checkbox1').checked && !($w('#input4').value.length > 0 && $w('#input5').value.length > 0 && $w('#input6').value.length > 0)) {
		$w('#text28').text = "Please enter contact details."
		$w('#text28').expand()
	}
	else if (!$w('#checkbox1').checked && !$w('#input5').valid) {
		$w('#text28').text = "Please enter a valid email address."
		$w('#text28').expand()
	}
	else if (!$w('#checkbox1').checked && !$w('#input6').valid) {
		$w('#text28').text = "Please enter a valid phone number."
		$w('#text28').expand()
	}
	else {
		let obj = $w('#dynamicDataset').getCurrentItem();
		$w('#dataset3').setFieldValue("title", obj.title);
		$w('#dataset3').setFieldValue("date", $w('#datePicker1').value);
		$w('#dataset3').setFieldValue("time", session.getItem("time"));
		$w('#dataset3').setFieldValue("address", $w('#input1').value);
		$w('#dataset3').setFieldValue("state", $w('#dropdown1').value);
		$w('#dataset3').setFieldValue("zip", $w('#input3').value);
		$w('#dataset3').setFieldValue("optionNum", obj.index);
		$w('#text40').text = $w('#dataset3').getCurrentItem().title;
		$w('#text38').text = $w('#dataset3').getCurrentItem().date.toLocaleString('en-US', {month: 'long'});
		$w('#text39').text = $w('#dataset3').getCurrentItem().date.toLocaleString('en-US', {weekday:'long'}) + " " + $w('#dataset3').getCurrentItem().time;
		$w('#text37').text = "" + $w('#dataset3').getCurrentItem().date.getDate();
		$w('#text41').text = $w('#dynamicDataset').getCurrentItem().time;
		$w('#text42').text = $w('#dynamicDataset').getCurrentItem().price;
		$w('#text43').text = $w('#dataset3').getCurrentItem().address;
		var num = $w('#dataset3').getCurrentItem().time;

		if (num.includes("pm") && !num.includes("12")) {
			if (num.includes("30")) {
				var s = "" +
				formatDate($w('#dataset3').getCurrentItem().date) + "T" +
				(parseInt(num.charAt(0)) + 12) +
				"3000" + "/" +
				formatDate($w('#dataset3').getCurrentItem().date) + "T" +
				(parseInt(num.charAt(0)) + 12 + parseInt($w('#text41').text.charAt(0))) +
				"3000";
			}
			else {
				var s = "" +
				formatDate($w('#dataset3').getCurrentItem().date) + "T" +
				(parseInt(num.charAt(0)) + 12) +
				"0000" + "/" +
				formatDate($w('#dataset3').getCurrentItem().date) + "T" +
				(parseInt(num.charAt(0)) + 12 + parseInt($w('#text41').text.charAt(0))) +
				"0000";
			}

		}
		else {
			if (num.includes("30")) {
				var s = "" +
				formatDate($w('#dataset3').getCurrentItem().date) + "T" +
				num.substring(0, 2) +
				"3000" + "/" +
				formatDate($w('#dataset3').getCurrentItem().date) + "T" +
				(parseInt(num.substring(0, 2)) + parseInt($w('#text41').text.charAt(0))) +
				"3000";
			}
			else {
				var s = "" +
				formatDate($w('#dataset3').getCurrentItem().date) + "T" +
				num.substring(0, 2) +
				"0000" + "/" +
				formatDate($w('#dataset3').getCurrentItem().date) + "T" +
				(parseInt(num.substring(0, 2)) + parseInt($w('#text41').text.charAt(0))) +
				"0000";
			}
		}
		var link = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + $w('#text40').text.replace(/ /g, "%20") + "%20Booking&dates=" + s + "&location=" + $w('#text43').text.replace(/ /g, "%20");
		console.log(link);


		session.setItem("link", link)
		$w('#button23').link = link;
		$w('#dataset3').save();
		$w('#box1').hide();
		$w('#button22').collapse();
		$w('#group4').collapse();
		$w('#group8').expand();
		$w('#group5').expand();
		$w('#text44').expand();

	}
}
export function formatDate(date) {
    var month = '' + (date.getMonth() + 1);
    var  day = '' + date.getDate();
    var  year = date.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join("");
}
export function input4_input(event) {
	$w('#text28').collapse();
}

export function input5_input(event) {
	$w('#text28').collapse();
}


export function input6_input(event) {
	$w('#text28').collapse();
}

export function text44_click(event) {
	wixLocation.to("/book-options");
}

export function text45_click(event) {
	wixLocation.to("/my-bookings");
}
