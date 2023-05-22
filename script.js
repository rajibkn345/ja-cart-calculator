const allItems = [
  "popular",
  {
    id: 1,
    type: "",
    name: "first-item",
    title: "",
    description: "",
    oneOff: false,
    popular: false,
    price: 0,
    monthly: false,
    plus: false,
    isChecked: false,
  },
  {
    id: 11,
    type: "xero",
    name: "x-1",
    title: "Xero setup & training",
    description:
      "We will setup our Xero file from scratch, then give you the training you will need to use it to its full potential",
    oneOff: true,
    popular: false,
    price: 295,
    monthly: false,
    plus: false,
    isChecked: false,
  },
  {
    id: 12,
    type: "xero",
    name: "x-2",
    title: "Xero training",
    description:
      "An hour of training on how to use Xero with it's full potential",
    oneOff: true,
    popular: false,
    price: 95,
    monthly: false,
    plus: false,
    isChecked: false,
  },
  {
    id: 13,
    type: "xero",
    name: "x-3",
    title: "Xero setup",
    description: "We will setup our Xero file for you and your business",
    oneOff: true,
    popular: false,
    price: 95,
    monthly: false,
    plus: false,
    isChecked: false,
  },
  {
    id: 14,
    type: "xero",
    name: "x-4",
    title: "Xero monthly subscription",
    description:
      "From $13 per month. We set you up with the right Xero subscription and manage your payments",
    oneOff: true,
    popular: false,
    price: 13,
    monthly: true,
    plus: true,
    isChecked: false,
  },
  {
    id: 15,
    type: "starter",
    name: "s-1",
    title: "Starter pack",
    description:
      "Includes company information and tax advice,Xero settup and training,new business checklist and budget into Xero",
    oneOff: false,
    popular: false,
    price: 85,
    monthly: true,
    plus: false,
    isChecked: false,
  },
  {
    id: 16,
    type: "starter",
    name: "s-2",
    title: "Success pack",
    description:
      "Business planning and goal setting,budgets and 6 meetings per annum and benchmarking",
    oneOff: false,
    popular: true,
    price: 150,
    monthly: true,
    plus: false,
    isChecked: false,
  },

  {
    id: 17,
    type: "bookkeeping",
    name: "b-1",
    title: "Prepare GST",
    description:
      "We prepare your GST returns ready for you to review and pay. we also remind of when and how much to pay and even send an alert if you forget! Requires Xero.",
    oneOff: false,
    popular: true,
    price: 50,
    monthly: true,
    plus: true,
    isChecked: false,
  },
  {
    id: 18,
    type: "bookkeeping",
    name: "b-2",
    title: "Bank Reconsilation",
    description:
      "If you really hate reconciling your Xero file, let us do it for you. Requires Xero.",
    oneOff: false,
    popular: true,
    price: 95,
    monthly: true,
    plus: true,
    isChecked: false,
  },
];

let storedItems = localStorage.getItem("displayedItems");

let displayedItems = JSON.parse(storedItems) || allItems;
console.log({ displayedItems });

const isNotCheckedItem = displayedItems?.filter(
  (item) => item.isChecked === true
);
if (isNotCheckedItem?.length === 0) {
  localStorage.setItem("displayedItems", JSON.stringify(allItems));
}

const selectElement = document.getElementById("select-element");
const listedItems = document.getElementById("listed-items");
const firstItem = document.getElementById("first-item");
const selectedItemsElement = document.getElementById("checkbox-contianer");
const calculatedValue = document.getElementById("calculatedValue");
var valueToSelect = displayedItems[0];

selectElement.addEventListener("change", () => {
  const selectedOptionHead = selectElement.value;
  storedItems = localStorage.getItem("displayedItems");
  console.log({ storedItems });
  displayedItems = JSON.parse(storedItems);
  console.log({ displayedItems });
  displayedItems[0] = selectedOptionHead;
  renderCheckbox(selectedOptionHead, displayedItems);
  //   checkBoxLists = document.querySelectorAll('input[type="checkbox"]');
});

const renderCheckbox = (selectedOptionHead, items) => {
  if (selectedOptionHead === "all") {
    // Display all items
    const chooseItems = items
      .filter((item) => typeof item === "object")
      .filter((item) => item.id !== 1);
    console.log({ chooseItems });
    selectedItemsElement.innerHTML = chooseItems
      ?.map(
        (item) => `
        <label for="${item?.id}" class='w-100 custom-card rounded-lg p-2 my-2'>
        <span class='d-flex justify-content-between'>
        <span class="d-flex">
        <input type="checkbox" ${item?.isChecked ? "checked" : ""} id="${
          item?.id
        }" name="${item?.name}" value="${item?.price}">
        <span class="ms-2 text-bold" >${item?.title}</span>
        </span>
        <span class="me-3"><span class="me-2 ${item?.oneOff ? "oneOff" : ""}">${
          item?.oneOff ? "One-off payment" : ""
        }</span><span class="text-bold">$${item?.price}${
          item?.plus ? "+" : ""
        }</span><span>${item?.monthly ? "/mo" : ""}</span></span>
        </span>
        <p>${item.description}</p>
      </label>
    `
      )
      .join("");
  } else if (selectedOptionHead === "popular") {
    selectedItemsElement.innerHTML = items
      .filter((item) => item.popular === true)
      .map(
        (item) =>
          `
        <label for="${item.id}" class='w-100 custom-card rounded-lg p-2 my-2'>
        <span class='d-flex justify-content-between'>
        <span class="d-flex">
        <input type="checkbox" ${item.isChecked ? "checked" : ""} id="${
            item.id
          }" name="${item.name}" value="${item.price}">
        <span class="ms-2 text-bold">${item.title}</span>
        </span>
        <span class="me-3"><span class="me-2 ${item.oneOff ? "oneOff" : ""}">${
            item.oneOff ? "One-off payment" : ""
          }</span><span class="text-bold">$${item.price}${
            item.plus ? "+" : ""
          }</span><span>${item.monthly ? "/mo" : ""}</span></span>
        </span>
        <p>${item.description}</p>
      </label>
    `
      )
      .join("");
  } else {
    // Display items based on the selected option
    const displayedItemsForSelectedOption = items.filter(
      (item) => item.type === selectedOptionHead
    );
    selectedItemsElement.innerHTML = displayedItemsForSelectedOption
      .map(
        (item) => `
        <label for="${item.id}" class='w-100 custom-card rounded-lg p-2 my-2'>
        <span class='d-flex justify-content-between'>
        <span class="d-flex">
        <input type="checkbox" ${item.isChecked ? "checked" : ""} id="${
          item.id
        }" name="${item.name}" value="${item.price}">
        <span class="ms-2 text-bold" >${item.title}</span>
        </span>
        <span class="me-3"><span class="me-2 ${item.oneOff ? "oneOff" : ""}">${
          item.oneOff ? "One-off payment" : ""
        }</span><span class="text-bold">$${item.price}${
          item.plus ? "+" : ""
        }</span><span>${item.monthly ? "/mo" : ""}</span></span>
        </span>
        <p>${item.description}</p>
      </label>
    `
      )
      .join("");
  }
  localStorage.setItem("displayedItems", JSON.stringify(displayedItems));
};

let localChecked = [];
selectedItemsElement.addEventListener("change", (event) => {
  // Get the checkbox value when it is checked
  if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
    const itemId = event.target.id;
    const matchedItem = displayedItems.find(
      (item) => item.id === parseInt(itemId)
    );
    if (event.target.checked) {
      matchedItem.isChecked = true;

      console.log({ localChecked });
      console.log("checkk==", localStorage.getItem("checkList"));
    } else {
      matchedItem.isChecked = false;
    }
    console.log(displayedItems, "di===");
    localStorage.setItem("displayedItems", JSON.stringify(displayedItems));

    updateCart(displayedItems);
  }
});
localStorage.setItem("checkList", localChecked);

console.log(localStorage.getItem("checkList"));

const showMostPopular = (array) => {
  selectedItemsElement.innerHTML = array
    .filter((item) => item.popular === true)
    .map(
      (item) =>
        `<label for="${item.id}" class='w-100 custom-card rounded-lg p-2 my-2'>
      <span class='d-flex justify-content-between'>
      <span class="d-flex">
      <input type="checkbox" ${item.isChecked ? "checked" : ""} id="${
          item.id
        }" name="${item.name}" value="${item.price}">
      <span class="ms-2 text-bold" >${item.title}</span>
      </span>
      <span class="me-3"><span class="me-2 ${item.oneOff ? "oneOff" : ""}">${
          item.oneOff ? "One-off payment" : ""
        }</span><span class="text-bold">$${item.price}${
          item.plus ? "+" : ""
        }</span><span>${item.monthly ? "/mo" : ""}</span></span>
      </span>
      <p>${item.description}</p>
    </label>`
    )
    .join("");
};

const deleteCart = (id) => {
  console.log(id, "target==");
  const matchedItem = displayedItems.filter((item) => item.id === parseInt(id));
  console.log({ matchedItem });
  matchedItem[0].isChecked = false;
  console.log({ matchedItem });
  const desiredId = document.getElementById(`${matchedItem[0].name}`);
  // console.log({ id: desiredId.innerHTML });
  desiredId.innerHTML = "";
  renderCheckbox(displayedItems[0], displayedItems);
  if (id === 1) {
    document.getElementById("package-id").style.display = "none";
    radioContainers.forEach((container) => {
      container.classList.remove("active");
      console.log({ container });
      container.children[1].checked = false;
    });
  }

  updateCart(displayedItems);
};

const updateCart = (array) => {
  console.log("clicked===");
  const selectedItems = array.filter((item) => item.isChecked === true);
  selectedItems.forEach((item) => {
    console.log({ updateItme: item });
    if (item.name === "first-item") {
      document.getElementById(
        "first-item"
      ).innerHTML = `<span class="text-bold">${
        item.title
      }</span><p><span>$</span><span>${item.price}</span><span>${
        item.plus ? "+" : ""
      }/mo</span><button class="close-btn"  onclick="deleteCart(${
        item.id
      })" ><i class="fa-solid fa-xmark"></i></button></p>`;

      const packageId = document.getElementById("package-id");
      console.log({ packageId });
      packageId.style.display = `${item.isChecked ? "block" : "none"}`;
      // packageId.classList.remove(`${item.isChecked ? "d-block" : ""}`);
    } else if (item.name === "s-1") {
      document.getElementById(
        "s-1"
      ).innerHTML = `<span class="text-bold">${item.title}</span><p class='d-flex align-items-center'><span>$</span><span>85</span><span>/mo</span><button class="close-btn"  onclick="deleteCart(${item.id})" ><i class="fa-solid fa-xmark"></i></button></p>`;
    } else if (item.name === "s-2") {
      console.log("s-2222222");
      document.getElementById(
        "s-2"
      ).innerHTML = `<span class="text-bold">${item.title}</span><p class='d-flex align-items-center'><span>$</span><span>150</span><span>/mo</span><button class="close-btn"  onclick="deleteCart(${item.id})" ><i class="fa-solid fa-xmark"></i></button></p>`;
    } else if (item.name === "x-1") {
      document.getElementById(
        "x-1"
      ).innerHTML = `<span class="text-bold">${item.title}</span><p class='d-flex align-items-center'><span>$</span><span>295</span><span></span><button class="close-btn"  onclick="deleteCart(${item.id})" ><i class="fa-solid fa-xmark"></i></button></p>`;
    } else if (item.name === "x-2") {
      document.getElementById(
        "x-2"
      ).innerHTML = `<span class="text-bold">${item.title}</span><p class='d-flex align-items-center'><span>$</span><span>95</span><span></span><button class="close-btn"  onclick="deleteCart(${item.id})" ><i class="fa-solid fa-xmark"></i></button></p>`;
    } else if (item.name === "x-3") {
      document.getElementById(
        "x-3"
      ).innerHTML = `<span class="text-bold">${item.title}</span><p class='d-flex'><span>$</span><span>225</span><span></span><button class="close-btn"  onclick="deleteCart(${item.id})" ><i class="fa-solid fa-xmark"></i></button></p>`;
    } else if (item.name === "x-4") {
      document.getElementById(
        "x-4"
      ).innerHTML = `<span class="text-bold">${item.title}</span><p class='d-flex align-items-center'><span>$</span><span>13</span><span>+/mo</span><button class="close-btn"  onclick="deleteCart(${item.id})" ><i class="fa-solid fa-xmark"></i></button></p>`;
    } else if (item.name === "b-1") {
      document.getElementById(
        "b-1"
      ).innerHTML = `<span class="text-bold">${item.title}</span><p class='d-flex'><span>$</span><span>50</span><span>+/mo</span><button class="close-btn"  onclick="deleteCart(${item.id})" ><i class="fa-solid fa-xmark"></i></button></p>`;
    } else if (item.name === "b-2") {
      document.getElementById(
        "b-2"
      ).innerHTML = `<span class="text-bold">${item.title}</span><p class='d-flex align-items-center'><span>$</span><span>95</span><span>+/mo</span><button class="close-btn"  onclick="deleteCart(${item.id})" ><i class="fa-solid fa-xmark"></i></button></p>`;
    }
  });
  const sum = selectedItems.reduce(
    (prev, cur) => prev + parseInt(cur.price),
    0
  );
  console.log({ sum });
  calculatedValue.innerHTML = `$${sum}/mo`;
  if (selectedItems.length === 0) {
    document.getElementById("isSelectOption").innerHTML =
      "Select options to create your quote";
    document.getElementById("calculator-div").style.display = "none";
  } else if (selectedItems.length > 0) {
    document.getElementById("isSelectOption").innerHTML = "";
    document.getElementById("calculator-div").style.display = "block";
  }
  localStorage.setItem("displayedItems", JSON.stringify(array));
};

window.onload = function () {
  console.log(displayedItems);
  renderCheckbox(displayedItems[0], displayedItems);
  updateCart(displayedItems);
  if (displayedItems[1].isChecked === true) {
    document.getElementById(
      `${displayedItems[1].title.toLowerCase()}`
    ).checked = true;
    document.getElementById("package-id").style.display = "block";
  } else if (displayedItems[1].isChecked === false) {
    document.getElementById("package-id").style.display = "none";
  }
  // Loop through the options and select the one with the matching value
  for (var i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].value === valueToSelect) {
      selectElement.selectedIndex = i;
      break;
    }
  }
};

// Get all radio containers
const radioContainers = document.querySelectorAll(".radio-container");

// Add click event listener to each radio container
radioContainers.forEach((container) => {
  container.addEventListener("click", function () {
    // Remove active class from all radio containers
    console.log("hi==");
    radioContainers.forEach((container) => {
      container.classList.remove("active");
    });

    // Add active class to the clicked radio container
    this.classList.add("active");
    // document.getElementById("package-id").classList.remove("d-none");
  });
});

const prices = document.getElementsByName("price");

prices.forEach((price) => {
  console.log({ price });
  price.addEventListener("click", function () {
    displayedItems[1].isChecked = true;
    if (price.id === "form") {
      displayedItems[1].title = "Form";
      displayedItems[1].price = 125;
    } else if (price.id === "flow") {
      displayedItems[1].title = "Flow";
      displayedItems[1].price = 155;
    } else if (price.id === "flex") {
      displayedItems[1].title = "Flex";
      displayedItems[1].price = 195;
    } else if (price.id === "custom") {
      displayedItems[1].title = "Custom plan";
      displayedItems[1].plus = true;
      displayedItems[1].price = 300;
    }
    console.log({ displayedItems });
    updateCart(displayedItems);
  });
});
