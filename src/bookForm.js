// document.addEventListener("DOMContentLoaded", function () {
//   const button = document.querySelectorAll(".bap");
//   console.log(button);

//   const modal = /*html*/ `
//   <div id="partnerModal"
//     class="partner-modal fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
//     <div id="partnerForm"
//       class="flex flex-col lg:flex-row  rounded-2xl overflow-hidden shadow-md p-2 bg-white relative">
//       <a id="closePartnerModal" class=" closse-button w-inline-block cursor-pointer absolute top-4 right-5"
//         onclick="document.getElementById('partnerModal')?.remove()">
//         <svg class="cart-closer" width="16px" height="16px" viewBox="0 0 16 16">
//           <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//             <g fill-rule="nonzero" fill="#333333">
//               <polygon
//                 points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8">
//               </polygon>
//             </g>
//           </g>
//         </svg>
//       </a>
//       <!-- Sidebar Stepper -->
//       <div class="bg-black text-white w-full lg:w-1/3 p-8 flex flex-col items-start gap-8 rounded-l-2xl">
//         <img src="./public/logo-white.png" alt="EBG Realty" class="h-16" />

//         <div class="flex flex-col gap-8 mt-12">
//           <!-- Step 1 -->
//           <div class="flex items-center gap-4">
//             <div class="w-5 h-5 rounded-full bg-[#D6A25A] flex items-center justify-center">
//               <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                 <path fill-rule="evenodd"
//                   d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
//                   clip-rule="evenodd" />
//               </svg>
//             </div>
//             <p class="font-semibold text-lg">Personal Details</p>
//           </div>

//           <!-- Step 2 -->
//           <div class="flex items-center gap-4 opacity-50">
//             <div class="w-5 h-5 rounded-full border border-gray-400"></div>
//             <p class="text-lg">Book Your Ticket</p>
//           </div>
//         </div>
//       </div>

//       <!-- Form Area -->
//       <div class="w-full lg:w-2/3 bg-white px-6 py-5">
//         <form class="w-full max-w-3xl mx-auto ">
//           <!-- Name + Mobile -->
//           <div id="first" class="block space-y-4">
//             <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label class="block font-semibold mb-1 text-[#6C6C6C]">Name</label>
//                 <input id="userName" type="text" placeholder="Enter Your Name" class="w-full px-4 py-3 rounded-lg shadow " />
//               </div>
//               <div>
//                 <label class="block font-semibold mb-1 text-[#6C6C6C]">Last Name</label>
//                 <input type="text" placeholder="Enter Your Last Name" class="w-full px-4 py-3 rounded-lg shadow " />
//               </div>
//             </div>

//             <div>
//               <label class="block font-semibold mb-1 text-[#6C6C6C]">Mobile Number</label>
//               <input id="mobileNumber" type="text" placeholder="Enter Your Number" class="w-full px-4 py-3 rounded-lg shadow " />
//             </div>
//             <!-- Email -->
//             <div>
//               <label class="block font-semibold mb-1 text-[#6C6C6C]">Email</label>
//               <input id="emailId" type="email" placeholder="Enter Your Mail address" class="w-full px-4 py-3 rounded-lg shadow " />
//             </div>

//             <!-- Location -->
//             <div>
//               <label class="block font-semibold mb-2 text-[#6C6C6C]">Preferred Property Location *</label>
//               <div class="flex gap-6">
//                 <label class="flex items-center gap-2">
//                   <input type="radio" name="location" />
//                   <span class="text-[#6C6C6C]">Hyderabad</span>
//                 </label>
//                 <label class="flex items-center gap-2">
//                   <input type="radio" name="location" />
//                   <span class="text-[#6C6C6C]">Dubai</span>
//                 </label>
//               </div>
//             </div>

//             <!-- Property Interest -->
//             <div>
//               <label class="block font-semibold mb-2 text-[#6C6C6C]">Type of Property Interest * (Select all that
//                 apply)</label>
//               <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 <label class="flex items-center gap-2">
//                   <input type="checkbox" />
//                   <span class="text-[#6C6C6C]">Investment in plots</span>
//                 </label>
//                 <label class="flex items-center gap-2">
//                   <input type="checkbox" />
//                   <span class="text-[#6C6C6C]">Investment in flats</span>
//                 </label>
//                 <label class="flex items-center gap-2">
//                   <input type="checkbox" />
//                   <span class="text-[#6C6C6C]">Fractional ownership</span>
//                 </label>
//                 <label class="flex items-center gap-2">
//                   <input type="checkbox" />
//                   <span class="text-[#6C6C6C]">Overseas Dubai-based options with VISA benefits</span>
//                 </label>
//               </div>
//             </div>

//             <!-- Investment Timeline -->
//             <div>
//               <label class="block font-semibold mb-1 text-[#6C6C6C]">Investment Timeline *</label>
//               <input id="timeline" type="text" placeholder="e.g. Within 3-6 months" class="w-full px-4 py-3 rounded-md shadow " />
//             </div>

//             <!-- Investment Capability -->
//             <div>
//               <label class="block font-semibold mb-1 text-[#6C6C6C]">Investment Capability *</label>
//               <select id="investment" class="w-full px-4 py-3 rounded-md shadow ">
//                 <option>Select Investment Range</option>
//                 <option>Below ₹25 Lakhs</option>
//                 <option>₹25L - ₹1 Cr</option>
//                 <option>₹1 Cr - ₹5 Cr</option>
//                 <option>₹5 Cr and above</option>
//               </select>
//             </div>

//             <!-- Submit -->
//             <div>
//               <button
//                  type="button" id="next"
//                 class="w-full bg-[#D6A25A] text-white py-3 rounded-md font-semibold hover:bg-[#b98545] transition">
//                 Next
//               </button>
//             </div>
//           </div>


//           <div id="second" class="hidden ">
//             <!-- Investment Capability -->
//             <div>
//               <label class="block font-semibold mb-1 text-[#6C6C6C]">Choose Your Preferred Date *</label>
//               <select class="w-full px-4 py-3 rounded-md shadow ">
//                 <option value="">Select Date</option>
//                 <option value="02-08-2025">02-08-2025</option>
//                 <option value="03-08-2025">03-08-2025</option>
//               </select>
//             </div>

//             <div>
//               <label class="block font-semibold mb-1 text-[#6C6C6C]">Available Time Slots</label>
//               <select class="w-full px-4 py-3 rounded-md shadow ">
//                 <option value="">Select Your Slot</option>
//                 <option value="10:00am-12:00pm">10:00am-12:00pm</option>
//                 <option value="12:00pm-03:00pm">12:00pm-03:00pm</option>
//                 <option value="03:00am-06:00pm">03:00am-06:00pm</option>
//               </select>
//             </div>

//             <!-- Submit -->
//             <div>
//               <button type="button" id="bookTicket"
//                 class="w-full bg-[#D6A25A] text-white py-3 rounded-md font-semibold hover:bg-[#b98545] transition">
//                 Submit
//               </button>
//             </div>
//           </div>
//       </div>

//       </form>
//     </div>
//   </div>
//   `;

//   button.forEach((btn) => {
//     btn.addEventListener("click", function () {
//       document.body.insertAdjacentHTML("beforeend", modal);

//       // Add event listener after modal is created
//       setTimeout(() => {
//         const form = document.getElementById("partnerForm");
//         // const trueRadio = document.getElementById("trueRadio");
//         // const falseRadio = document.getElementById("falseRadio");
//         const first = document.getElementById("first");
//         const second = document.getElementById("second");
//         const next = document.getElementById("next");
//         const bookTicket = document.getElementById("bookTicket");

//         if (form) {

//           // Next button click validation
//           next.addEventListener("click", (e) => {
//             e.preventDefault();
//             if (validateFirstForm()) {
//               first.style.display = "none";
//               second.style.display = "block";
//             }
//           });

//           // Book ticket button validation
//           bookTicket.addEventListener("click", (e) => {
//             e.preventDefault();
//             if (validateSecondForm()) {
//               alert("Ticket booked successfully!");
//               document.getElementById("partnerModal")?.remove();
//             }
//           });

//           // Close modal when clicking outside
//           document
//             .getElementById("partnerModal")
//             .addEventListener("click", (e) => {
//               if (e.target.id === "partnerModal") {
//                 document.getElementById("partnerModal")?.remove();
//               }
//             });
//         }
//       }, 100);
//     });
//   });

//   function toggleBusinessField(show) {
//     const field = document.getElementById("business-details");
//     field.classList.toggle("hidden", !show);
//   }

//   function validateFirstForm() {
//     const name = document.getElementById("userName").value.trim();
//     const mobile = document.getElementById("mobileNumber").value.trim();
//     const email = document.getElementById("emailId").value.trim();
//     const businessStatus = document.querySelector(
//       'input[name="location"]:checked'
//     );
//     // const sector = document.getElementById("sectorInterest").value;
//     const timeline = document.getElementById("timeline").value.trim();
//     const investment = document.getElementById("investment").value.trim();

//     // Check if name is empty
//     if (!name) {
//       // alert("Please enter your name");
//       document.getElementById("userName").style.border = "2px solid red"
//       console.log("sdafasd");
      
//       document.getElementById("userName").focus();
//       return false;
//     }

//     // Check if mobile number is empty
//     if (!mobile) {
//       // alert("Please enter your mobile number");
//       document.getElementById("mobileNumber").focus();
//       return false;
//     }

//     // Validate mobile number format (basic validation)
//     if (!/^\d{10}$/.test(mobile)) {
//       // alert("Please enter a valid 10-digit mobile number");
//       document.getElementById("mobileNumber").focus();
//       return false;
//     }

//     // Check if email is empty
//     if (!email) {
//       // alert("Please enter your email address");
//       document.getElementById("emailId").focus();
//       return false;
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       // alert("Please enter a valid email address");
//       document.getElementById("emailId").focus();
//       return false;
//     }

//     // Check if business status is selected
//     if (!businessStatus) {
//       // alert("Please select your current business status");
//       return false;
//     }


//     // Check if sector is selected
//     if (!sector) {
//       // alert("Please select a sector interest");
//       document.getElementById("sectorInterest").focus();
//       return false;
//     }

//     // Check if timeline is empty
//     if (!timeline) {
//       // alert("Please enter your timeline for starting a business");
//       document.getElementById("timeline").focus();
//       return false;
//     }

//     // Check if investment capability is empty
//     if (!investment) {
//       // alert("Please enter your investment capability");
//       document.getElementById("investment").focus();
//       return false;
//     }

//     return true;
//   }

//   function validateSecondForm() {
//     const selectedDate = document.getElementById("selectedDate").value;
//     const selectedSlot = document.getElementById("selectedSlot").value;

//     // Check if date is selected
//     if (!selectedDate) {
//       // alert("Please select a date");
//       document.getElementById("selectedDate").focus();
//       return false;
//     }

//     // Check if time slot is selected
//     if (!selectedSlot) {
//       alert("Please select a time slot");
//       document.getElementById("selectedSlot").focus();
//       return false;
//     }

//     return true;
//   }
// });


document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelectorAll(".bap");
  console.log(button);

  const modal = /*html*/ `
  <div id="partnerModal"
    class="partner-modal fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
    <div id="partnerForm"
      class="flex flex-col lg:flex-row  rounded-2xl overflow-hidden shadow-md p-2 bg-white relative">
      <a id="closePartnerModal" class=" closse-button w-inline-block cursor-pointer absolute top-4 right-10"
        onclick="document.getElementById('partnerModal')?.remove()">
        <svg class="cart-closer" width="16px" height="16px" viewBox="0 0 16 16">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill-rule="nonzero" fill="#333333">
              <polygon
                points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8">
              </polygon>
            </g>
          </g>
        </svg>
      </a>
      <!-- Sidebar Stepper -->
      <div class="bg-black text-white w-full lg:w-1/3 p-8 flex flex-col items-start  md:gap-8 rounded-l-2xl md:min-w-[326px]">
        <img src="./public/logo-white.png" alt="EBG Realty" class="h-7 md:h-16" />

        <div class="flex flex-row md:flex-col md:gap-8 mt-2.5 md:mt-12">
          <!-- Step 1 -->
          <div class="flex items-center gap-4">
            <div class="w-5 h-5 rounded-full bg-[#D6A25A] flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <p class="font-semibold text-sm md:text-lg">Personal Details</p>
          </div>

          <!-- Step 2 -->
          <div class="flex items-center gap-4 opacity-50">
            <div class="w-5 h-5 rounded-full border border-gray-400"></div>
            <p class=" text-sm md:text-lg">Book Your Ticket</p>
          </div>
        </div>
      </div>

      <!-- Form Area -->
      <div class="w-full lg:w-2/3 bg-white px-6 py-5 overflow-y-scroll md:min-w-[717px]" style="height: calc(100vh - 100px);">
        <form class="w-full max-w-3xl mx-auto ">
          <!-- Name + Mobile -->
          <div id="first" class="block space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block font-semibold mb-1 text-[#6C6C6C]">Name</label>
                <input id="userName" type="text" placeholder="Enter Your Name" class="w-full px-4 py-3 rounded-lg shadow " />
                <div id="userName-error" class="text-red-500 text-sm mt-1 hidden"></div>
              </div>
              <div>
                <label class="block font-semibold mb-1 text-[#6C6C6C]">Last Name</label>
                <input id="lastName" type="text" placeholder="Enter Your Last Name" class="w-full px-4 py-3 rounded-lg shadow " />
                <div id="lastName-error" class="text-red-500 text-sm mt-1 hidden"></div>
              </div>
            </div>

            <div>
              <label class="block font-semibold mb-1 text-[#6C6C6C]">Mobile Number</label>
              <input id="mobileNumber" type="number" placeholder="Enter Your Number" class="w-full px-4 py-3 rounded-lg shadow " />
              <div id="mobileNumber-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>
            <!-- Email -->
            <div>
              <label class="block font-semibold mb-1 text-[#6C6C6C]">Email</label>
              <input id="emailId" type="email" placeholder="Enter Your Mail address" class="w-full px-4 py-3 rounded-lg shadow " />
              <div id="emailId-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>

            <!-- Location -->
            <div>
              <label class="block font-semibold mb-2 text-[#6C6C6C]">Preferred Property Location *</label>
              <div class="flex gap-6">
                <label class="flex items-center gap-2">
                  <input type="radio" name="location" />
                  <span class="text-[#6C6C6C]">Hyderabad</span>
                </label>
                <label class="flex items-center gap-2">
                  <input type="radio" name="location" />
                  <span class="text-[#6C6C6C]">Dubai</span>
                </label>
              </div>
              <div id="location-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>

            <!-- Property Interest -->
            <div>
              <label class="block font-semibold mb-2 text-[#6C6C6C]">Type of Property Interest * (Select all that
                apply)</label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label class="flex items-center gap-2">
                  <input type="checkbox" name="propertyInterest" />
                  <span class="text-[#6C6C6C]">Investment in plots</span>
                </label>
                <label class="flex items-center gap-2">
                  <input type="checkbox" name="propertyInterest" />
                  <span class="text-[#6C6C6C]">Investment in flats</span>
                </label>
                <label class="flex items-center gap-2">
                  <input type="checkbox" name="propertyInterest" />
                  <span class="text-[#6C6C6C]">Fractional ownership</span>
                </label>
                <label class="flex items-center gap-2">
                  <input type="checkbox" name="propertyInterest" />
                  <span class="text-[#6C6C6C]">Overseas Dubai-based options with VISA benefits</span>
                </label>
              </div>
              <div id="propertyInterest-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>

            <!-- Investment Timeline -->
            <div>
              <label class="block font-semibold mb-1 text-[#6C6C6C]">Investment Timeline *</label>
              <input id="timeline" type="text" placeholder="e.g. Within 3-6 months" class="w-full px-4 py-3 rounded-md shadow " />
              <div id="timeline-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>

            <!-- Investment Capability -->
            <div>
              <label class="block font-semibold mb-1 text-[#6C6C6C]">Investment Capability *</label>
              <select id="investment" class="w-full px-4 py-3 rounded-md shadow ">
                <option value="">Select Investment Range</option>
                <option>Below ₹25 Lakhs</option>
                <option>₹25L - ₹1 Cr</option>
                <option>₹1 Cr - ₹5 Cr</option>
                <option>₹5 Cr and above</option>
              </select>
              <div id="investment-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>

            <!-- Submit -->
            <div>
              <button
                 type="button" id="next"
                class="w-full bg-[#D6A25A] text-white py-3 rounded-md font-semibold hover:bg-[#b98545] transition">
                Next
              </button>
            </div>
          </div>


          <div id="second" class="hidden space-y-4">
            <!-- Investment Capability -->
            <div>
              <label class="block font-semibold mb-1 text-[#6C6C6C]">Choose Your Preferred Date *</label>
              <select id="selectedDate" class="w-full px-4 py-3 rounded-md shadow ">
                <option value="">Select Date</option>
                <option value="02-08-2025">02-08-2025</option>
                <option value="03-08-2025">03-08-2025</option>
              </select>
              <div id="selectedDate-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>

            <div>
              <label class="block font-semibold mb-1 text-[#6C6C6C]">Available Time Slots</label>
              <select id="selectedSlot" class="w-full px-4 py-3 rounded-md shadow ">
                <option value="">Select Your Slot</option>
                <option value="10:00am-12:00pm">10:00am-12:00pm</option>
                <option value="12:00pm-03:00pm">12:00pm-03:00pm</option>
                <option value="03:00am-06:00pm">03:00am-06:00pm</option>
              </select>
              <div id="selectedSlot-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>

            <!-- Submit -->
            <div>
              <button type="button" id="bookTicket"
                class="w-full bg-[#D6A25A] text-white py-3 rounded-md font-semibold hover:bg-[#b98545] transition">
                Submit
              </button>
            </div>
          </div>
      </div>

      </form>
    </div>
  </div>
  `;

  button.forEach((btn) => {
    btn.addEventListener("click", function () {
      document.body.insertAdjacentHTML("beforeend", modal);

      // Add event listener after modal is created
      setTimeout(() => {
        const form = document.getElementById("partnerForm");
        const first = document.getElementById("first");
        const second = document.getElementById("second");
        const next = document.getElementById("next");
        const bookTicket = document.getElementById("bookTicket");

        if (form) {
          // Next button click validation
          next.addEventListener("click", (e) => {
            e.preventDefault();
            if (validateFirstForm()) {
              first.style.display = "none";
              second.style.display = "block";
              
              // Update stepper visual state
              const step1 = document.querySelector('.bg-[#D6A25A]').parentElement;
              const step2 = document.querySelector('.opacity-50');
              
              step1.classList.add('opacity-50');
              step2.classList.remove('opacity-50');
              step2.querySelector('.border-gray-400').classList.remove('border-gray-400');
              step2.querySelector('.w-5').classList.add('bg-[#D6A25A]', 'flex', 'items-center', 'justify-center');
              step2.querySelector('.w-5').innerHTML = `
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clip-rule="evenodd" />
                </svg>
              `;
            }
          });

          // Book ticket button validation
          bookTicket.addEventListener("click", (e) => {
            e.preventDefault();
            if (validateSecondForm()) {
              alert("Ticket booked successfully!");
              document.getElementById("partnerModal")?.remove();
            }
          });

          // Close modal when clicking outside
          document
            .getElementById("partnerModal")
            .addEventListener("click", (e) => {
              if (e.target.id === "partnerModal") {
                document.getElementById("partnerModal")?.remove();
              }
            });
        }
      }, 100);
    });
  });

  // Helper function to show error
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + '-error');
    
    if (field) {
      field.style.border = "2px solid #ef4444";
      field.style.borderRadius = "8px";
    }
    
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.classList.remove('hidden');
    }
  }

  // Helper function to clear error
  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + '-error');
    
    if (field) {
      field.style.border = "";
      field.style.borderRadius = "";
    }
    
    if (errorDiv) {
      errorDiv.textContent = "";
      errorDiv.classList.add('hidden');
    }
  }

  // Helper function to clear all errors
  function clearAllErrors() {
    const errorFields = ['userName', 'lastName', 'mobileNumber', 'emailId', 'location', 'propertyInterest', 'timeline', 'investment'];
    errorFields.forEach(fieldId => clearError(fieldId));
  }

  function validateFirstForm() {
    // Clear all previous errors
    clearAllErrors();
    
    let isValid = true;
    
    const name = document.getElementById("userName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const mobile = document.getElementById("mobileNumber").value.trim();
    const email = document.getElementById("emailId").value.trim();
    const location = document.querySelector('input[name="location"]:checked');
    const propertyInterest = document.querySelector('input[name="propertyInterest"]:checked');
    const timeline = document.getElementById("timeline").value.trim();
    const investment = document.getElementById("investment").value.trim();

    // Check if name is empty
    if (!name) {
      showError("userName", "Please enter your name");
      isValid = false;
    }

    // Check if last name is empty
    if (!lastName) {
      showError("lastName", "Please enter your last name");
      isValid = false;
    }

    // Check if mobile number is empty
    if (!mobile) {
      showError("mobileNumber", "Please enter your mobile number");
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      // Validate mobile number format (basic validation)
      showError("mobileNumber", "Please enter a valid 10-digit mobile number");
      isValid = false;
    }

    // Check if email is empty
    if (!email) {
      showError("emailId", "Please enter your email address");
      isValid = false;
    } else {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showError("emailId", "Please enter a valid email address");
        isValid = false;
      }
    }

    // Check if location is selected
    if (!location) {
      showError("location", "Please select your preferred property location");
      isValid = false;
    }

    // Check if property interest is selected
    if (!propertyInterest) {
      showError("propertyInterest", "Please select at least one property interest");
      isValid = false;
    }

    // Check if timeline is empty
    if (!timeline) {
      showError("timeline", "Please enter your investment timeline");
      isValid = false;
    }

    // Check if investment capability is selected
    if (!investment) {
      showError("investment", "Please select your investment capability");
      isValid = false;
    }

    return isValid;
  }

  function validateSecondForm() {
    // Clear previous errors for second form
    clearError("selectedDate");
    clearError("selectedSlot");
    
    let isValid = true;
    
    const selectedDate = document.getElementById("selectedDate").value;
    const selectedSlot = document.getElementById("selectedSlot").value;

    // Check if date is selected
    if (!selectedDate) {
      showError("selectedDate", "Please select a date");
      isValid = false;
    }

    // Check if time slot is selected
    if (!selectedSlot) {
      showError("selectedSlot", "Please select a time slot");
      isValid = false;
    }

    return isValid;
  }

  // Add input event listeners to clear errors on user input
  document.addEventListener('input', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
      clearError(e.target.id);
    }
  });

  // Add change event listeners for radio buttons and checkboxes
  document.addEventListener('change', function(e) {
    if (e.target.type === 'radio' || e.target.type === 'checkbox') {
      if (e.target.name === 'location') {
        clearError('location');
      } else if (e.target.name === 'propertyInterest') {
        clearError('propertyInterest');
      }
    }
  });
});