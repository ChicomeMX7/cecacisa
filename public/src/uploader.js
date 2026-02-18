/*

let upload = null;
let uploadIsRunning = false;
const toggleBtn = document.querySelector("#toggle-btn");
const input = document.querySelector("input[type=file]");
const progress = document.querySelector(".progress");
const progressBar = progress?.querySelector(".bar");
const alertBox = document.querySelector("#support-alert");
const uploadList = document.querySelector("#upload-list");
const chunkInput = document.querySelector("#chunksize");
const parallelInput = document.querySelector("#paralleluploads");
const endpointInput = document.querySelector("#endpoint");

function reset() {
	if (input && toggleBtn) {
		input.value = "";
		toggleBtn.textContent = "start upload";
		upload = null;
		uploadIsRunning = false;
	}
}

function askToResumeUpload(previousUploads, currentUpload) {
	if (previousUploads.length === 0) return;

	let text = "You tried to upload this file previously at these times:\n\n";
	previousUploads.forEach((previousUpload, index) => {
		text += `[${index}] ${previousUpload.creationTime}\n`;
	});
	text += "\nEnter the corresponding number to resume an upload or press Cancel to start a new upload";

	const answer = prompt(text);
	const index = parseInt(answer, 10);

	if (!Number.isNaN(index) && previousUploads[index]) {
		currentUpload.resumeFromPreviousUpload(previousUploads[index]);
	}
}
function getHeaders() {
	console.log("getHeaders");
	// "Content-Length;": "",
	// Accept: "",
	// "Accept-Encoding": "gzip, deflate, br",
	// Pragma: "no-cache",
	// "X-Requested-Width;": "",
	// "Content-Type;": "",
	// "Origin;": "",
	// "Access-Control-Allow-Headers;": "",
	// "Access-Control-Allow-Methods;": "",
	// "Access-Control-Allow-Credentials;": "",
	// "Access-Control-Allow-Origin": "*",
	// 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    // "Access-Control-Allow-Methods": "GET, POST, CREATE, UPDATE, DELETE, OPTIONS",
    // "Access-Control-Allow-Credentials": "true",
	return {
		"User-Token": "user-token",
		Authorization: "Bearer " + get_cookie("mct").token,
	};
}
const get_cookie = (cname) => {
	const target = document.cookie
		.split("; ")
		.find((row) => row.startsWith(`${cname}=`))
		?.split("=")[1];
	return target ? JSON.parse(target) : {};
};
function startUpload() {
	const file = input.files[0];

	if (!file) {
		return;
	}

	const endpoint = endpointInput.value;
	let chunkSize = parseInt(chunkInput.value, 10);
	if (Number.isNaN(chunkSize)) {
		chunkSize = Infinity;
	}

	let parallelUploads = parseInt(parallelInput.value, 10);
	if (Number.isNaN(parallelUploads)) {
		parallelUploads = 1;
	}

	toggleBtn.textContent = "pause upload";

	const options = {
		endpoint,
		chunkSize,
		headers: getHeaders(),
		retryDelays: [0, 1000],
		parallelUploads,
		metadata: {
			filename: file.name,
			filetype: file.type,
		},
		onError(error) {
			if (error.originalRequest) {
				if (window.confirm(`Failed because: ${error}\nDo you want to retry?`)) {
					upload.start();
					uploadIsRunning = true;
					return;
				}
			} else {
				window.alert(`Failed because: ${error}`);
			}

			reset();
		},
		onProgress(bytesUploaded, bytesTotal) {
			const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
			progressBar.style.width = `${percentage}%`;
			console.log(bytesUploaded, bytesTotal, `${percentage}%`);
		},
		onSuccess() {
			const anchor = document.createElement("a");
			anchor.textContent = `Download ${upload.file.name} (${upload.file.size} bytes)`;
			anchor.href = upload.url;
			anchor.className = "btn btn-success";
			uploadList.appendChild(anchor);

			reset();
		},
	};

	upload = new tus.Upload(file, options);
	upload.findPreviousUploads().then((previousUploads) => {
		askToResumeUpload(previousUploads, upload);

		upload.start();
		uploadIsRunning = true;
	});
}

if (!tus.isSupported) {
	alertBox.classList.remove("hidden");
}

if (!toggleBtn) {
	throw new Error("Toggle button not found on this page. Aborting upload-demo. ");
}

toggleBtn.addEventListener("click", (e) => {
	e.preventDefault();

	if (upload) {
		if (uploadIsRunning) {
			upload.abort();
			toggleBtn.textContent = "resume upload";
			uploadIsRunning = false;
		} else {
			upload.start();
			toggleBtn.textContent = "pause upload";
			uploadIsRunning = true;
		}
	} else if (input.files.length > 0) {
		startUpload();
	} else {
		input.click();
	}
});

input.addEventListener("change", startUpload);

function uuu() {
	const myHeaders = new Headers();
myHeaders.append("User-Token", "user-token");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlcGVAbWVjdWF0ZS5vcmciLCJyZWFsbXMiOnsiYXBpcyI6IjA2NjYiLCJtZWRpYSI6IjA2NjYiLCJtZWN1YXRlIjoiMDIyMiJ9LCJpc3MiOiJtZWN1YXRlLWFzdHJvcGh5dHVtIiwic3ViIjoiNzNhMThiM2YtYzBkZS00NWZiLWI4ZjQtM2Q1ZTVjYjViNzRmIiwiYXVkIjpbIm1lY3VhdGUiLCJtZWRpYSIsImFwaXMiXSwiZXhwIjoxNzE3NDQ5MDM3LCJuYmYiOjE3MTU3NDAyMzcsImlhdCI6MTcxNTc0MDIzNywianRpIjoidXNlci10b2tlbiJ9.SDQVj931X96Fq7Ho_46674Eer4LkSU_Zoe51Rz5Jip8");

const requestOptions = {
  method: "CREATE",
  headers: myHeaders,
  redirect: "follow",
  body: JSON.stringify({ filename: "image.jpg", filetype: "image/jpeg" }),
};

fetch("http://localhost/oso/image/HHyj6mqHDhQmrgBD/new", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}
// uuu();
 */