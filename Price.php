<?php 
/**
 * Template Name: Price
 */

 get_header();

?>

<div class="price-wrapper">


    <div class="row">
        <div class="col-md-12">
            <div class="title-section">
                <p>save money + Headaches</p>
                <h1>Beany Pricing Guid</h1>
                <p>Use the pricing calculator below to get a quick quote and sign up today to schedule a complimentary
                    Beany
                    consultation.</p>
            </div>
        </div>
    </div>



    <div class="row">
        <div class="col-md-7">
            <div class="form-left">
                <p>1.Select your package</p>
                <form action="">
                    <!-- item -->
                    <label class="radio-container">
                        <div class="j-flex">
                            <div class="lef"> <span>Form</span>Up to 250k income</div>
                            <div class="right">$125/mo</div>
                        </div>
                        <input type="radio" name="price" value="125" onclick="SavePrice(this.value)">
                        <span class="checkmark"></span>
                    </label>
                    <!-- end item -->
                    <!-- item -->
                    <label class="radio-container">
                        <div class="j-flex">
                            <div class="lef"> <span>Flow</span>250k to 750k income</div>
                            <div class="right">$155/mo</div>
                        </div>
                        <input type="radio" name="price" value="155" onclick="SavePrice(this.value)">
                        <span class="checkmark"></span>
                    </label>
                    <!-- end item -->

                    <!-- item -->
                    <label class="radio-container">
                        <div class="j-flex">
                            <div class="lef"> <span>Flex</span>750k to 2m income</div>
                            <div class="right">$195/mo</div>
                        </div>
                        <input type="radio" name="price" value="195" onclick="SavePrice(this.value)">
                        <span class="checkmark"></span>
                    </label>
                    <!-- end item -->
                    <!-- item -->
                    <label class="radio-container">
                        <div class="j-flex">
                            <div class="lef"> <span>Custom plan</span>Over 2m income</div>
                            <div class="right">$300+/mo</div>
                        </div>
                        <input type="radio" name="price" value="300" onclick="SavePrice(this.value)">
                        <span class="checkmark"></span>
                    </label>
                    <!-- end item -->
                </form>

                <!-- list item package includes -->
                <div class="package-list-item">
                    <div class="package-title-wrap">
                        <div class="package-title">
                            <h4>Beany Pricing Guid</h4>
                        </div>
                        <div class="button-link">
                            <a href="">Learn More</a>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>Reviewing your Xero file </li>
                    <li>Year-end tax adjustments </li>
                    <li>Completing annual financial statements </li>
                    <li>Completing and filing your entity tax returns, plus returns for 2 shareholders </li>
                    <li>Completing and filing your annual Companies Office returns </li>
                    <li>Preparing your minutes and resolutions </li>
                    <li>Unlimited advice and support for day-to-day queries </li>
                </ul>
            </div>

            <!-- options -->
            <div class="options-extra-wrapper">
                <div class="options-title-wrapper d-flex">
                    <div class="options-title">
                        <h4>Extra Options</h4>
                    </div>
                    <div class="options-description">
                        <select class="form-control" name="" id="slf">
                            <option value="0">All</option>
                            <option value="1">Xero</option>
                            <option value="1">Most Popular</option>
                            <option value="1">Starter & success</option>
                            <option value="1">Bookkeeping</option>
                        </select>
                    </div>
                </div>
                <div class="extra-options-check-field">
                    <!-- single item -->
                    <div class="check-filed-wrapper">
                        <label class="Checkbox_root">
                            <input class="Checkbox_hidden__nC_wr " type="checkbox" value="500">

                            <span class="Checkbox_content">
                                <span class="Checkbox_label__1mlba">
                                    <span class="Typography_root__34tPM PricingBlock_l">PrepareGST</span>
                                    <span class="Price_price">
                                        <span class="Typography_root" data-type="price">$50+</span>
                                        <span class="Typography_root">/mo</span>
                                    </span>
                                </span>
                                <span class="Typography_root__34tPM">We
                                    prepare your GST returns ready for you to review and pay. We also remind you of when
                                    and how much to pay,
                                    and even send an alert if you forget! Requires Xero.</span>
                                <button type="button" class="PricingBlock_learn_more_btn__dUUoJ">
                                    <span
                                        class="Typography_root__34tPM Typography_body__YPase Typography_regular__VtiIz">Learn
                                        more</span><svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15.5L12.5 10.5L7.5 5.5" stroke="#243047" stroke-linecap="round"
                                            stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </button>
                                <div aria-hidden="true"></div>
                            </span></label>
                    </div>
                    <!-- end single item -->

                </div>
            </div>
        </div>
        <div class="col-md-5">
            <div class="form-right">
                <div class="price-card">
                    <h2 id="show-price">$155/mo</h2>
                    <span>excl. GSTCore </span>
                    <p>packages are based on 12 monthly payments.</p>
                    <hr>
                    <div class="additional-qoute">
                        <span>QUOTE</span>
                        <div id='formId' class="qoute-left"></div>
                        <div id='priceId' class="qoute-right">$195/mo <button><i class="fa fa-times"
                                    aria-hidden="true"></i></button>
                        </div>

                    </div>
                    <hr>

                    <div class="price-list-item">
                        <ul>
                            <li>
                                Your own dedicated accountant
                            </li>
                            <li>
                                Your own dedicated accountant
                            </li>
                            <li>
                                Your own dedicated accountant
                            </li>
                            <li>
                                Your own dedicated accountant
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer">

                        <p> Your own dedicated accountant <br>
                            Year-end tax and compliance <br>
                            Unlimited support and advice <br>
                            Fixed monthly fees, no surprises</p>
                        <a href="">Sign up free</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

</div>

</div>

<?php get_footer();?>