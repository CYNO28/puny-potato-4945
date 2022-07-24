import react from "react";
import Footer from "../../Components/HomePage/Footer/Footer";
import styles from "./Integrations.module.css"

const Integrations = () => {
    return (
        <>

        <div className={styles.body_container}>
            <div className={styles.body_container2}>
                <div className={styles.body_container3}>
                    <br></br>
                    <br></br>
                    <div className={styles.new}>
                        <div>
                            <div className={styles.text1_container}>
                                <h1 styles={{ width: "10px" }}>Time tracking integrated with your team’s favorite apps</h1>
                            </div>
                            <br />
                            <br />
                            <div className={styles.text2container}>
                                <h3>Harvest works with the most popular tools so your team can track time effortlessly.</h3>
                            </div>
                        </div>
                        <div styles={{ marginTop: "0px" }}>
                            <div>
                                <img src="https://19495563.fs1.hubspotusercontent-na1.net/hubfs/19495563/raw_assets/public/harvest-theme/images/integrations/integrations-wheel.svg" alt="image" />
                            </div>

                        </div>

                    </div>
                    <div className="integrationswheel">
                        <a href="/integrations/asana" class="integration-bubble bubble-asana">
                            <img class="integration-bubble-image" width="90" src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-asana.png?width=90&amp;name=integration-bubble-asana.png" alt="Asana" srcset="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-asana.png?width=45&amp;name=integration-bubble-asana.png 45w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-asana.png?width=90&amp;name=integration-bubble-asana.png 90w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-asana.png?width=135&amp;name=integration-bubble-asana.png 135w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-asana.png?width=180&amp;name=integration-bubble-asana.png 180w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-asana.png?width=225&amp;name=integration-bubble-asana.png 225w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-asana.png?width=270&amp;name=integration-bubble-asana.png 270w" sizes="(max-width: 90px) 100vw, 90px" />
                        </a>
                        <a href="/integrations/jira" class="integration-bubble bubble-jira">
                            <img class="integration-bubble-image" width="90" src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-jira.png?width=90&amp;name=integration-bubble-jira.png" alt="Jira" srcset="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-jira.png?width=45&amp;name=integration-bubble-jira.png 45w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-jira.png?width=90&amp;name=integration-bubble-jira.png 90w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-jira.png?width=135&amp;name=integration-bubble-jira.png 135w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-jira.png?width=180&amp;name=integration-bubble-jira.png 180w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-jira.png?width=225&amp;name=integration-bubble-jira.png 225w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-jira.png?width=270&amp;name=integration-bubble-jira.png 270w" sizes="(max-width: 90px) 100vw, 90px" />
                        </a>
                        <a href="/integrations/slack" class="integration-bubble bubble-slack">
                            <img class="integration-bubble-image" width="90" src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-slack.png?width=90&amp;name=integration-bubble-slack.png" alt="Slack" srcset="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-slack.png?width=45&amp;name=integration-bubble-slack.png 45w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-slack.png?width=90&amp;name=integration-bubble-slack.png 90w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-slack.png?width=135&amp;name=integration-bubble-slack.png 135w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-slack.png?width=180&amp;name=integration-bubble-slack.png 180w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-slack.png?width=225&amp;name=integration-bubble-slack.png 225w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-slack.png?width=270&amp;name=integration-bubble-slack.png 270w" sizes="(max-width: 90px) 100vw, 90px" />
                        </a>
                        <a href="/integrations/google-calendar" class="integration-bubble bubble-gcal">
                            <img class="integration-bubble-image" width="90" src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-gcal.png?width=90&amp;name=integration-bubble-gcal.png" alt="Google Calendar" srcset="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-gcal.png?width=45&amp;name=integration-bubble-gcal.png 45w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-gcal.png?width=90&amp;name=integration-bubble-gcal.png 90w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-gcal.png?width=135&amp;name=integration-bubble-gcal.png 135w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-gcal.png?width=180&amp;name=integration-bubble-gcal.png 180w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-gcal.png?width=225&amp;name=integration-bubble-gcal.png 225w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-gcal.png?width=270&amp;name=integration-bubble-gcal.png 270w" sizes="(max-width: 90px) 100vw, 90px" />
                        </a>
                        <a href="/integrations/github" class="integration-bubble bubble-github">
                            <img class="integration-bubble-image" width="90" src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-github.png?width=90&amp;name=integration-bubble-github.png" alt="GitHub" srcset="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-github.png?width=45&amp;name=integration-bubble-github.png 45w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-github.png?width=90&amp;name=integration-bubble-github.png 90w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-github.png?width=135&amp;name=integration-bubble-github.png 135w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-github.png?width=180&amp;name=integration-bubble-github.png 180w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-github.png?width=225&amp;name=integration-bubble-github.png 225w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-github.png?width=270&amp;name=integration-bubble-github.png 270w" sizes="(max-width: 90px) 100vw, 90px" />
                        </a>
                        <a href="/integrations/stripe" class="integration-bubble bubble-stripe">
                            <img class="integration-bubble-image" width="90" src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-stripe.png?width=90&amp;name=integration-bubble-stripe.png" alt="Stripe" srcset="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-stripe.png?width=45&amp;name=integration-bubble-stripe.png 45w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-stripe.png?width=90&amp;name=integration-bubble-stripe.png 90w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-stripe.png?width=135&amp;name=integration-bubble-stripe.png 135w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-stripe.png?width=180&amp;name=integration-bubble-stripe.png 180w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-stripe.png?width=225&amp;name=integration-bubble-stripe.png 225w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-stripe.png?width=270&amp;name=integration-bubble-stripe.png 270w" sizes="(max-width: 90px) 100vw, 90px" />
                        </a>
                        <a href="/integrations/trello" class="integration-bubble bubble-trello">
                            <img class="integration-bubble-image" width="90" src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-trello.png?width=90&amp;name=integration-bubble-trello.png" alt="Trello" srcset="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-trello.png?width=45&amp;name=integration-bubble-trello.png 45w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-trello.png?width=90&amp;name=integration-bubble-trello.png 90w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-trello.png?width=135&amp;name=integration-bubble-trello.png 135w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-trello.png?width=180&amp;name=integration-bubble-trello.png 180w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-trello.png?width=225&amp;name=integration-bubble-trello.png 225w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-trello.png?width=270&amp;name=integration-bubble-trello.png 270w" sizes="(max-width: 90px) 100vw, 90px" />
                        </a>
                        <a href="/integrations/quickbooks-online" class="integration-bubble bubble-qbo">
                            <img class="integration-bubble-image" width="90" src="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-qbo.png?width=90&amp;name=integration-bubble-qbo.png" alt="QuickBooks Online" srcset="https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-qbo.png?width=45&amp;name=integration-bubble-qbo.png 45w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-qbo.png?width=90&amp;name=integration-bubble-qbo.png 90w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-qbo.png?width=135&amp;name=integration-bubble-qbo.png 135w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-qbo.png?width=180&amp;name=integration-bubble-qbo.png 180w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-qbo.png?width=225&amp;name=integration-bubble-qbo.png 225w, https://www.getharvest.com/hs-fs/hubfs/raw_assets/public/harvest-theme/images/integrations/integration-bubble-qbo.png?width=270&amp;name=integration-bubble-qbo.png 270w" sizes="(max-width: 90px) 100vw, 90px" />
                        </a>

                    </div>
                    <input className={styles.inpp} placeholder="Fing an app or services you use" type="text" />
                </div>
            </div>

            <div className={styles.story}>
                <div className={styles.story_box}>
                    <div className={styles.story_box_content}>
                        <div className={styles.story_box_left}>
                            <div className={styles.sidebar}>
                                <button><a>All Integrations</a></button>
                                <button><a>Analytics & reporting</a></button>
                                <button><a>Browser extensions</a></button>
                                <button><a>Communication & CRM</a></button>
                                <button><a>Contracts & proposals</a></button>
                                <button><a>Finance & payments</a></button>
                                <button><a>Issue tracking & support</a></button>
                                <button><a>Productivity</a></button>
                                <button><a>Project management</a></button>
                            </div>
                        </div>
                        <div className={styles.story_box_right}>
                            <div className={styles.right_box1}>
                                <div styles={{ width: '80px', }} className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/asana.png?width=300&name=asana.png" ></img>
                                </div>
                                <div className={styles.b12}>
                                    <h1>Asana</h1>
                                    <p>Track time right from your Asana tasks without switching to Harvest.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                                <div styles={{ width: '80px', }} className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/basecamp.png?width=300&name=basecamp.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/asana.png?width=300&name=asana.png" ></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>Basecamp</h1>
                                    <p>Track time from your to-dos with a Harvest browser extension.</p>
                                </div>
                            </div><div className={styles.right_box1}>
                                <div styles={{ width: '80px', }} className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/github.png?width=300&name=github.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/asana.png?width=300&name=asana.png" ></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>GitHub</h1>
                                    <p>Track time from issues and pull requests with a Harvest browser extension.</p>
                                </div>
                            </div><div className={styles.right_box1}>
                                <div styles={{ width: '80px', }} className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/slack.png?width=300&name=slack.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/asana.png?width=300&name=asana.png" ></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>Slack</h1>
                                    <p>Start timers, check someone's status, and keep track of project budgets.</p>
                                </div>
                            </div><div className={styles.right_box1}>
                                <div styles={{ width: '80px', }} className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/trello.png?width=300&name=trello.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/asana.png?width=300&name=asana.png" ></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>Trello</h1>
                                    <p>TTrack time from cards with the Harvest Power-Up or browser extension.</p>
                                </div>
                            </div><div className={styles.right_box1}>
                                <div styles={{ width: '80px', }} className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/qbo.png?width=300&name=qbo.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/asana.png?width=300&name=asana.png" ></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>QuickBooks Online</h1>
                                    <p>Copy Harvest invoices and recorded payments right into this accounting tool.</p>
                                </div>
                            </div><div className={styles.right_box1}>
                                <div styles={{ width: '80px', }} className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/xero.png?width=300&name=xero.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/asana.png?width=300&name=asana.png" ></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>Stripe</h1>
                                    <p>Receive invoice payments online by credit card or ACH payment.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                                <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/paypal.png?width=300&name=paypal.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg"></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>PayPal</h1>
                                    <p>Accept online payments through PayPal Standard.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                                <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/chrome.png?width=300&name=chrome.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg"></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>Chrome</h1>
                                    <p>Track time right from your browser and popular project management tools.</p>
                                </div>
                            </div><div className={styles.right_box1}>
                                <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/jira.png?width=300&name=jira.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg"></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>Jira</h1>
                                    <p>Track time right from the issue and project tracking software Jira.</p>
                                </div>
                            </div><div className={styles.right_box1}>
                                <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/outlook.png?width=300&name=outlook.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg"></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>Outlook</h1>
                                    <p>Pull your Outlook calendar events into your Harvest timesheet.</p>
                                </div>
                            </div><div className={styles.right_box1}>
                                <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/google-calendar.png?width=300&name=google-calendar.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg"></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>Google Calendar</h1>
                                    <p>Pull your Google Calendar events into your Harvest timesheet.</p>
                                </div>
                            </div><div className={styles.right_box1}>
                                <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/zapier.png?width=300&name=zapier.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg"></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>Zapier</h1>
                                    <p>Connect Harvest to 1,000+ apps with automated workflows using Zapier.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                                <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/ifttt.png?width=300&name=ifttt.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg"></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>IFTTT</h1>
                                    <p>Create simple connections between Harvest and the apps you use every day.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                                <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/zendesk.png?width=300&name=zendesk.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg"></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>Zendesk</h1>
                                    <p>A professional help desk tool where you can track time spent on tickets for billing.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                                <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/alfred.png?width=300&name=alfred.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg"></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>Alfred</h1>
                                    <p>Control your Harvest timers using keyboard shortcuts with this Alfred workflow.</p>
                                </div>
                            </div>
                            <div className={styles.right_box1}>
                                <div className={styles.b11}>
                                    <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/workspace.png?width=300&name=workspace.png" alt="" />
                                    {/* <img src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg"></img> */}
                                </div>
                                <div className={styles.b12}>
                                    <h1>Google Workspace</h1>
                                    <p>ign in with your Google account and export time data into Google Drive.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div style={{ marginLeft: '200px', border: '1px solid orange', width: '500px%' }}></div>

            <div className="myy" >
                <div >
                    <div style={{ marginLeft: "200px", display: 'flex', marginTop: "50px", }} >
                        <div style={{ display: 'flex' }}>
                            <div className={styles.hi}>
                                <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/illo-180-integrations.svg"></img>
                            </div>
                        </div>

                        <div styles={{ marginLeft: "510px", display: 'flex' }}>
                            <h1 styles={{ marginLeft: "40px", fontSize: "40px" }}>Build your own Harvest integration</h1>
                            <h4 style={{ marginLeft: "40px", fontSize: "40px" }}>Extend the functionality of your app by easily adding Harvest timers, or build a bespoke integration with the Harvest API.</h4>
                            <div className={styles.bottom_box12}>
                                <a href="/signup" className={styles.button_trial} style={{ marginLeft: "40px", backgroundColor: "black" }}>Browse options</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />

            <div style={{ border: '1px solid orange', width: '120%' }}></div>


            <br />
            <br />
            <br />

           
            <div className={styles.bottom}>
                <div className={styles.bottom_content}>
                    <div className={styles.bottom_box}>
                        <div className={styles.bottom_box1}>
                            <h2>Start tracking time today</h2>
                            <h4>Join 70,000+ companies spending their time wisely with Harvest.</h4>
                            <div className={styles.bottom_box12}>
                                <a href="/signup" className={styles.button_trial}>Try Harvest free</a>
                                <p>Free 30-day trial. No credit card required.</p>
                            </div>
                        </div>
                        <div className={styles.bottom_box2}>
                            <div className={styles.bottom_box2_img}>
                                <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
            <Footer/>
</>


    )
}

export default Integrations;

