document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelectorAll(".bap");
  console.log(button);

  const modal = /*html*/ `
  <div id="partnerModal" class="partner-modal fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
  <form id="partnerForm" class="w-full max-w-xl bg-white rounded-2xl p-6 border border-black/10 overflow-y-scroll" style="height: calc(100vh - 50px);">
  <div class="flex justify-between items-center mb-6 "> <h2 class="text-2xl font-bold text-center">Buy Tickets Now</h2> <a id="closePartnerModal" class="w-commerce-commercecartcloselink closse-button w-inline-block cursor-pointer" onclick="document.getElementById('partnerModal')?.remove()">
  <svg class="cart-closer" width="16px" height="16px" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill-rule="nonzero" fill="#333333">
              <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
          </g>
      </g>
  </svg>
</a></div>

  <div id="first" class="block">
 
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  <div>
    <label class="block font-semibold mb-1">Name</label>
    <input type="text" placeholder="Enter Your Name" class="w-full border px-4 py-2 rounded" />
  </div>
  <div>
    <label class="block font-semibold mb-1">Mobile Number</label>
    <input type="text" placeholder="Enter Your Number" class="w-full border px-4 py-2 rounded" />
  </div>
</div>

<!-- Email -->
<div class="mb-6">
  <label class="block font-semibold mb-1">Email</label>
  <input type="email" placeholder="Enter Your Email Address" class="w-full border px-4 py-2 rounded" />
</div>

<!-- Property Location -->
<div class="mb-6">
  <label class="block font-semibold mb-2">Preferred Property Location *</label>
  <div class="flex gap-6">
    <label class="flex items-center gap-2">
      <input type="radio" name="location" />
      <span>Hyderabad</span>
    </label>
    <label class="flex items-center gap-2">
      <input type="radio" name="location" />
      <span>Dubai</span>
    </label>
  </div>
</div>

<!-- Property Interests -->
<div class="mb-6">
  <label class="block font-semibold mb-2">Type of Property Interest * (Select all that apply)</label>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <label class="flex items-center gap-2">
      <input type="checkbox" class="h-5 w-5" />
      <span>Investment in plots</span>
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" class="h-5 w-5" />
      <span>Investment in flats</span>
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" class="h-5 w-5" />
      <span>Fractional ownership</span>
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" class="h-5 w-5" />
      <span>Overseas Dubai-based <br>options with VISA benefits</span>
    </label>
  </div>
</div>

<!-- Investment Timeline -->
<div class="mb-6">
  <label class="block font-semibold mb-1">Investment Timeline *</label>
  <input type="text" placeholder="E.g. 3-6 months" class="w-full border px-4 py-2 rounded" />
</div>

<!-- Investment Capability -->
<div class="mb-6">
  <label class="block font-semibold mb-1">Investment Capability *</label>
  <select class="w-full border px-4 py-2 rounded">
    <option>Select Investment Range</option>
    <option>₹25 lakh to ₹50 lakh</option>
    <option>₹50 lakh to ₹1 crore</option>
    <option>₹1 crore to ₹3 crore</option>
    <option>₹3 crore and above</option>
  </select>
</div>

  <!-- Submit button -->
  <button type="button" id="next" class="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition">
    Next
  </button>
  </div>

  <div id="second" class="hidden h-[90%]">
  <div class="flex flex-col justify-between h-full">
      <div>
      <!-- Date selection -->
      <label class="block font-semibold mb-1">Select a Date</label>
      <select id="selectedDate" class="w-full border border-black/50 rounded-md px-3 py-2 mb-4">
        <option value="">Select Date</option>
        <option value="02-08-2025">02-08-2025</option>
        <option value="03-08-2025">03-08-2025</option>
        </select>
        
        <!-- Time slot selection -->
        <label class="block font-semibold mb-1">Select a Slot</label>
      <select id="selectedSlot" class="w-full border border-black/50 rounded-md px-3 py-2 mb-4">
      <option value="">Select Your Slot</option>
      <option value="10:00am-12:00pm">10:00am-12:00pm</option>
      <option value="12:00pm-03:00pm">12:00pm-03:00pm</option>
      <option value="03:00am-06:00pm">03:00am-06:00pm</option>
      </select>
      </div>
      <div>
      <button type="button" id="bookTicket" class="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition">
      Book Ticket Now
    </button>
      </div>
  </div>
  </div>
</form>
</div>
`;

  button.forEach((btn) => {
    btn.addEventListener("click", function () {
      document.body.insertAdjacentHTML("beforeend", modal);

      // Add event listener after modal is created
      setTimeout(() => {
        const form = document.getElementById("partnerForm");
        const trueRadio = document.getElementById("trueRadio");
        const falseRadio = document.getElementById("falseRadio");
        const first = document.getElementById("first");
        const second = document.getElementById("second");
        const next = document.getElementById("next");
        const bookTicket = document.getElementById("bookTicket");

        if (form) {
          trueRadio.addEventListener("change", () => toggleBusinessField(true));
          falseRadio.addEventListener("change", () =>
            toggleBusinessField(false)
          );

          // Next button click validation
          next.addEventListener("click", (e) => {
            e.preventDefault();
            if (validateFirstForm()) {
              first.style.display = "none";
              second.style.display = "block";
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

  function toggleBusinessField(show) {
    const field = document.getElementById("business-details");
    field.classList.toggle("hidden", !show);
  }

  function validateFirstForm() {
    const name = document.getElementById("userName").value.trim();
    const mobile = document.getElementById("mobileNumber").value.trim();
    const email = document.getElementById("emailId").value.trim();
    const businessStatus = document.querySelector(
      'input[name="status"]:checked'
    );
    const sector = document.getElementById("sectorInterest").value;
    const timeline = document.getElementById("timeline").value.trim();
    const investment = document.getElementById("investment").value.trim();

    // Check if name is empty
    if (!name) {
      alert("Please enter your name");
      document.getElementById("userName").focus();
      return false;
    }

    // Check if mobile number is empty
    if (!mobile) {
      alert("Please enter your mobile number");
      document.getElementById("mobileNumber").focus();
      return false;
    }

    // Validate mobile number format (basic validation)
    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      document.getElementById("mobileNumber").focus();
      return false;
    }

    // Check if email is empty
    if (!email) {
      alert("Please enter your email address");
      document.getElementById("emailId").focus();
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      document.getElementById("emailId").focus();
      return false;
    }

    // Check if business status is selected
    if (!businessStatus) {
      alert("Please select your current business status");
      return false;
    }

    // If business status is "yes", check if business name is provided
    if (businessStatus.value === "yes") {
      const businessName = document.getElementById("businessName").value.trim();
      if (!businessName) {
        alert("Please enter your business name");
        document.getElementById("businessName").focus();
        return false;
      }
    }

    // Check if sector is selected
    if (!sector) {
      alert("Please select a sector interest");
      document.getElementById("sectorInterest").focus();
      return false;
    }

    // Check if timeline is empty
    if (!timeline) {
      alert("Please enter your timeline for starting a business");
      document.getElementById("timeline").focus();
      return false;
    }

    // Check if investment capability is empty
    if (!investment) {
      alert("Please enter your investment capability");
      document.getElementById("investment").focus();
      return false;
    }

    return true;
  }

  function validateSecondForm() {
    const selectedDate = document.getElementById("selectedDate").value;
    const selectedSlot = document.getElementById("selectedSlot").value;

    // Check if date is selected
    if (!selectedDate) {
      alert("Please select a date");
      document.getElementById("selectedDate").focus();
      return false;
    }

    // Check if time slot is selected
    if (!selectedSlot) {
      alert("Please select a time slot");
      document.getElementById("selectedSlot").focus();
      return false;
    }

    return true;
  }
});
