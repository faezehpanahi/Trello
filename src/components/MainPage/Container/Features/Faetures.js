import React, { Fragment, useState } from "react";
import style from "./Features.module.css";

const Features = () => {
  const [choose, setChoose] = useState(false);
  const [details, setDetails] = useState(false);
  const [meet, setMeet] = useState(false);
  const [power, setPower] = useState(false);

  const handleShowChoose = () => {
    setChoose(!choose);
  };
  const handleShowDetalis = () => {
    setDetails(!details);
  };
  const handleShowMeet = () => {
    setMeet(!meet);
  };
  const handleShowPwer = () => {
    setPower(!power);
  };

  return (
    <Fragment>
      <section className={style.choose}>
        <div className={style.image}>
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/5f90e4a913ac52092f2ac7ff308c45c4/view.svg" />
        </div>

        <div className={style.chooseInfo}>
          <div className={style.info}>
            <h5>CHOOSE A VIEW</h5>
            <h2>Cards contain everything you need</h2>
            <p>
              Trello cards are your portal to more organized work—where every
              single part of your task can be managed, tracked, and shared with
              teammates. Open any card to uncover an ecosystem of checklists,
              due dates, attachments, conversations, and more.
            </p>
          </div>
          <div className={style.expand}>
            <h3 onClick={handleShowChoose}>
              <a>Learn more</a>
            </h3>
            <div style={!choose ? { display: "none" } : { direction: "block" }}>
              <p>
                You and your team can start up a Trello board in seconds. With
                the ability to view board data from many different angles, the
                entire team stays up-to-date in the way that suits them best:
              </p>
              <ul>
                <li>Use a Timeline view for project planning</li>
                <li>Calendar helps with time management</li>
                <li>Table view connects work across boards</li>
                <li>See board stats with Dashboard, and more!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={style.details}>
        <div className={style.detailsInfo}>
          <div className={style.info}>
            <h5>DIVE INTO THE DETAILS</h5>
            <h2>The board is just the beginning</h2>
            <p>
              Lists and cards are the building blocks of organizing work on a
              Trello board. Grow from there with task assignments, timelines,
              productivity metrics, calendars, and more.
            </p>
          </div>
          <div className={style.expand}>
            <h3 onClick={handleShowDetalis}>
              <a>Learn more</a>
            </h3>
            <div
              style={!details ? { display: "none" } : { direction: "block" }}
            >
              <p>
                Spin up a Trello card with a click, then uncover everything it
                can hold. Break down bigger card tasks into steps with file
                attachment previews, reminders, checklists and comments—emoji
                reactions included! Plus, gain powerful perspective by seeing
                all cards by list and status at the board level.
              </p>
              <p>Your team can:</p>
              <ul>
                <li>Manage deadlines</li>
                <li>Provide and track feedback</li>
                <li>Assign tasks and hand off work</li>
                <li>Connect work across apps</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={style.image}>
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/b845022d8d738ba8fa5e8b293e434149/card-back.svg" />
        </div>
      </section>

      <section className={style.meet}>
        <div className={style.image}>
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/35366a300daac434fa02bc3ef83d8132/automation.png" />
        </div>

        <div className={style.meetInfo}>
          <div className={style.info}>
            <h5>MEET YOUR NEW BUTLER</h5>
            <h2>No-code automation</h2>
            <p>
              Let the robots do the work—so your team can focus on work that
              matters. With Trello’s built-in automation, Butler, reduce the
              number of tedious tasks (and clicks) on your project board by
              harnessing the power of automation across your entire team.
            </p>
          </div>
          <div className={style.expand}>
            <h3 onClick={handleShowMeet}>
              <a>Learn more</a>
            </h3>
            <div style={!meet ? { display: "none" } : { direction: "block" }}>
              <p>
                Butler uses natural language commands to automate just about any
                task in Trello:
              </p>
              <ul>
                <li>Automate common actions like moving lists</li>
                <li>Create custom buttons to build process quickly</li>
                <li>Surface upcoming deadlines to the team</li>
                <li>Schedule teammate assignments, and more!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={style.power}>
        <div className={style.powerInfo}>
          <div className={style.info}>
            <h5>POWER-UPS</h5>
            <h2>Integrate top work tools</h2>
            <p>
              Easily connect the apps your team already uses into your Trello
              workflow, or add a Power-Up that helps fine-tune one specific
              need. With hundreds of Power-Ups available, your team’s workflow
              wishes are covered.
            </p>
          </div>
          <div className={style.expand}>
            <h3 onClick={handleShowPwer}>
              <a>Learn more</a>
            </h3>
            <div style={!power ? { display: "none" } : { direction: "block" }}>
              <p>
                From Reporting to Custom Fields to your beloved software
                integrations—we’ve got functionalities, your favorites, and
                more!
              </p>
              <p>Such as:</p>
              <ul>
                <li>Confluence</li>
                <li>Slack</li>
                <li>Dropbox</li>
                <li>Google Drive</li>
                <li>Evernote</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={style.image}>
          <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/7a11db312701af17abefa8e691cf124a/power-ups.png" />
        </div>
      </section>
    </Fragment>
  );
};

export default Features;
