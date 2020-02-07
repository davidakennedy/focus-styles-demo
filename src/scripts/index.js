// Import all components and reference one by name. You can optimize this using
// your build process (ie. Tree shaking in Webpack)
// Import individual component. No special optimizations needed.
import { Autocomplete } from "@cmsgov/design-system-core";
import { Button } from "@cmsgov/design-system-core";
import { Choice } from "@cmsgov/design-system-core";
import { ChoiceList } from "@cmsgov/design-system-core";
import { DateField } from "@cmsgov/design-system-core";
import { Dialog } from "@cmsgov/design-system-core";
import { Dropdown } from "@cmsgov/design-system-core";
import { FormLabel } from "@cmsgov/design-system-core";
import { HelpDrawer } from "@cmsgov/design-system-core";
import { HelpDrawerToggle } from "@cmsgov/design-system-core";
import { MonthPicker } from "@cmsgov/design-system-core";
import { SkipNav } from "@cmsgov/design-system-core";
import { Tabs } from "@cmsgov/design-system-core";
import { TabPanel } from "@cmsgov/design-system-core";
import { TextField } from "@cmsgov/design-system-core";
import { VerticalNav } from "@cmsgov/design-system-core";

import React from "react";
import ReactDOM from "react-dom";

const Example = function() {
  class AutocompleteExample extends React.PureComponent {
    render() {
      return (
        <div>
          <Autocomplete
            items={[
              {
                id: "kRf6c2fY",
                name: "Cook County, IL"
              },
              {
                id: "lYf5cGfM",
                name: "Cook County, MD"
              },
              {
                id: "mZfKcGf9",
                name: "Cook County, TN"
              },
              {
                id: "xFz6dLba",
                name: "Cook County, AK"
              },
              {
                id: "vTr5c99",
                name: "Cook County, FL"
              },
              {
                id: "ntY8Lha",
                name: "Cook County, AL"
              },
              {
                id: "uRe0Wqo",
                name: "Cook County, WA"
              },
              {
                id: "yUR7MWl",
                name: "Cook County, OR"
              }
            ]}
            focusTrigger
            label="Select from the options below:"
            onChange={selectedItem => console.log(selectedItem)}
            onInputValueChange={inputVal =>
              console.log("[Autocomplete]: " + inputVal)
            }
          >
            <TextField
              hint="Type c then use ARROW keys to change options, ENTER key to make a selection, ESC to dismiss."
              label="Labeled list"
              name="Downshift_autocomplete"
            />
          </Autocomplete>

          <Autocomplete
            items={[
              {
                id: "kRf6c2fY",
                name: "Cook County, IL"
              },
              {
                id: "lYf5cGfM",
                name: "Cook County, MD"
              },
              {
                id: "mZfKcGf9",
                name: "Cook County, TN"
              }
            ]}
            onChange={selectedItem => console.log(selectedItem)}
            onInputValueChange={inputVal =>
              console.log("[Autocomplete]: " + inputVal)
            }
          >
            <TextField
              hint="Type c then use ARROW keys to change options, ENTER key to make a selection, ESC to dismiss."
              label="Simple list"
              name="Downshift_autocomplete"
            />
          </Autocomplete>

          <Autocomplete items={[]} loading clearSearchButton={false}>
            <TextField
              hint="List should return string Loading to simulate async data call."
              label="Loading message"
              name="Downshift_autocomplete"
            />
          </Autocomplete>

          <Autocomplete items={[]} clearSearchButton={false}>
            <TextField
              hint="List should return string No results found."
              label="No results message"
              name="Downshift_autocomplete"
            />
          </Autocomplete>

          <Autocomplete clearSearchButton={false}>
            <TextField
              hint="No list should be shown if no item array is provided and it's not loading. This could be the case if a user has not yet entered the minimum number of characters required for a search."
              label="Nothing shown"
              name="Downshift_autocomplete"
            />
          </Autocomplete>
        </div>
      );
    }
  }

  class ButtonExample extends React.PureComponent {
    render() {
      return (
        <div>
          <h6 class="preview__label">Default button</h6>
          <button type="button" class="ds-c-button">
            Default
          </button>
          <button type="button" class="ds-c-button ds-c-button--hover">
            Hover
          </button>
          <button type="button" class="ds-c-button ds-c-button--active">
            Active
          </button>
          <button type="button" class="ds-c-button" disabled>
            Disabled
          </button>

          <h6 class="preview__label">Primary button</h6>
          <button type="button" class="ds-c-button ds-c-button--primary">
            Default
          </button>
          <button
            type="button"
            class="ds-c-button ds-c-button--primary ds-c-button--hover"
          >
            Hover
          </button>
          <button
            type="button"
            class="ds-c-button ds-c-button--primary ds-c-button--active"
          >
            Active
          </button>
          <button
            type="button"
            class="ds-c-button ds-c-button--primary"
            disabled
          >
            Disabled
          </button>

          <h6 class="preview__label">Danger button</h6>
          <button type="button" class="ds-c-button ds-c-button--danger">
            Default
          </button>
          <button
            type="button"
            class="ds-c-button ds-c-button--danger ds-c-button--hover"
          >
            Hover
          </button>
          <button
            type="button"
            class="ds-c-button ds-c-button--danger ds-c-button--active"
          >
            Active
          </button>
          <button
            type="button"
            class="ds-c-button ds-c-button--danger"
            disabled
          >
            Disabled
          </button>

          <h6 class="preview__label">Success button</h6>
          <button type="button" class="ds-c-button ds-c-button--success">
            Default
          </button>
          <button
            type="button"
            class="ds-c-button ds-c-button--success ds-c-button--hover"
          >
            Hover
          </button>
          <button
            type="button"
            class="ds-c-button ds-c-button--success ds-c-button--active"
          >
            Active
          </button>
          <button
            type="button"
            class="ds-c-button ds-c-button--success"
            disabled
          >
            Disabled
          </button>

          <h6 class="preview__label">Transparent button</h6>
          <button type="button" class="ds-c-button ds-c-button--transparent">
            Default
          </button>
          <button
            type="button"
            class="ds-c-button ds-c-button--transparent ds-c-button--hover"
          >
            Hover
          </button>
          <button
            type="button"
            class="ds-c-button ds-c-button--transparent ds-c-button--active"
          >
            Active
          </button>
          <button
            type="button"
            class="ds-c-button ds-c-button--transparent"
            disabled
          >
            Disabled
          </button>

          <h6 class="preview__label">Size variant buttons</h6>
          <button type="button" class="ds-c-button ds-c-button--small">
            Small
          </button>
          <button type="button" class="ds-c-button">
            Default
          </button>
          <button class="ds-c-button ds-c-button--big">Big</button>

          <h6 class="preview__label">Inverse buttons</h6>
          <div class="example--inverse">
            <button class="ds-c-button ds-c-button--inverse">Default</button>
            <button class="ds-c-button ds-c-button--inverse ds-c-button--primary">
              Primary
            </button>
            <button class="ds-c-button ds-c-button--inverse ds-c-button--danger">
              Danger
            </button>
            <button class="ds-c-button ds-c-button--inverse ds-c-button--success">
              Success
            </button>
            <button class="ds-c-button ds-c-button--inverse ds-c-button--transparent">
              Transparent
            </button>
            <button disabled class="ds-c-button ds-c-button--inverse">
              Disabled
            </button>
          </div>
        </div>
      );
    }
  }

  class ChoiceListExample extends React.PureComponent {
    render() {
      return (
        <div>
          <ChoiceList
            choices={[
              { label: "Choice 1", value: "A" },
              { defaultChecked: true, label: "Choice 2", value: "B" }
            ]}
            className="ds-u-margin-top--0"
            label="Radio example"
            name="choices_field"
          />

          <ChoiceList
            choices={[
              { label: "Choice 1", value: "A" },
              {
                defaultChecked: true,
                label: "Choice 2",
                hint: "Example hint text",
                value: "B"
              }
            ]}
            errorMessage="Example error message"
            label="Checkbox example"
            multiple
            name="multiple_choices_field"
          />

          <ChoiceList
            choices={[
              { label: "Choice 1", requirementLabel: "Optional", value: "A" },
              {
                label: "Choice 2",
                requirementLabel: "Optional",
                value: "B"
              }
            ]}
            label="Choices with requirementLabel"
            multiple
            name="some_optional_choices_field"
            requirementLabel="Optional"
          />
        </div>
      );
    }
  }

  class DateFieldExample extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        day: "10",
        month: "1",
        year: "2000"
      };
    }
    render() {
      return (
        <div>
          <fieldset className="ds-u-margin-top--3 ds-u-padding-left--3 ds-u-padding-bottom--3 ds-u-border--2">
            <legend className="ds-u-font-size--h3">Controlled Example</legend>
            <DateField
              label={
                <span>
                  DateField using default <code>dateFormatter</code>
                </span>
              }
              hint={"Try to enter a date with invalid number of digits"}
              monthValue={this.state.month}
              dayValue={this.state.day}
              yearValue={this.state.year}
              onChange={(e, dateObject) => this.setState(dateObject)}
            />
          </fieldset>
          <DateField
            label="DateField example"
            errorMessage="Please enter a year in the past"
            monthDefaultValue="10"
            dayDefaultValue="31"
            yearDefaultValue="2020"
            yearInvalid
          />
        </div>
      );
    }
  }

  class DropdownExample extends React.PureComponent {
    render() {
      const dropdownOptions = [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
        { label: "Option 4", value: "4" },
        { label: "Option 5", value: "5" },
        { label: "Option 6", value: "6" },
        { label: "Option 7", value: "7" },
        { label: "Option 8", value: "8" }
      ];
      return (
        <div>
          <Dropdown
            options={dropdownOptions}
            defaultValue={"2"}
            hint="Example hint text"
            label="Dropdown example"
            name="dropdown_choices_field"
          />
          <Dropdown
            options={dropdownOptions}
            defaultValue={"2"}
            size="small"
            label="Small dropdown example"
            name="small_dropdown_choices_field"
          />
          <Dropdown
            options={dropdownOptions}
            defaultValue={"2"}
            size="medium"
            label="Medium dropdown example"
            name="medium_dropdown_choices_field"
          />
          <Dropdown
            options={dropdownOptions}
            defaultValue={"2"}
            label="Disabled example"
            disabled
            name="disabled_dropdown_choices_field"
          />
        </div>
      );
    }
  }

  class HelpDrawerExample extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showHelp: false
      };
    }

    handleDrawerClose() {
      this.setState({ showHelp: false });
    }

    handleDrawerOpen() {
      this.setState({ showHelp: true });
    }

    render() {
      return (
        <div>
          <p>
            <strong>Click the link below to open the help drawer.</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <HelpDrawerToggle
            helpDrawerOpen={this.state.showHelp}
            showDrawer={() => this.handleDrawerOpen()}
          >
            Toggle the help drawer.
          </HelpDrawerToggle>
          {this.state.showHelp && (
            <HelpDrawer
              footerTitle="Footer Title"
              footerBody={
                <p className="ds-text ds-u-margin--0">Footer content</p>
              }
              title="Help Drawer Title"
              onCloseClick={() => this.handleDrawerClose()}
            >
              <strong>An Explanation</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </HelpDrawer>
          )}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      );
    }
  }

  function handleBlur(evt, mask) {
    console.log("Unmasked value: ", unmaskValue(evt.target.value, mask));
  }

  class ControlledCurrencyFieldExample extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currencyValue: "2500"
      };
    }

    clearCurrencyValue() {
      this.setState({ currencyValue: "" });
    }

    randomizeCurrencyValue() {
      this.setState({ currencyValue: (Math.random() * 10000).toFixed(2) });
    }

    setCurrencyValue(currencyValue) {
      console.log(`Setting currencyValue to ${currencyValue}`);
      this.setState({ currencyValue });
    }

    render() {
      return (
        <fieldset className="ds-u-margin-top--3 ds-u-padding-left--3 ds-u-padding-bottom--3 ds-u-border--2">
          <legend className="ds-u-font-size--h3">Controlled Example</legend>
          <TextField
            label="This is a controlled component"
            mask="currency"
            name="controlled_currency_example"
            className="ds-u-margin-bottom--2"
            onChange={evt =>
              this.setCurrencyValue(unmaskValue(evt.target.value, "currency"))
            }
            value={this.state.currencyValue}
          />
          <Button onClick={() => this.clearCurrencyValue()}>Clear</Button>
          <Button onClick={() => this.randomizeCurrencyValue()}>
            Randomize
          </Button>
        </fieldset>
      );
    }
  }

  const Example = () => {
    return (
      <div>
        <TextField
          ariaLabel="Enter monthly income amount in dollars."
          label="Currency"
          mask="currency"
          name="currency_example"
          onBlur={evt => handleBlur(evt, "currency")}
          defaultValue="2500"
        />

        <TextField
          label="Phone number"
          mask="phone"
          name="phone_example"
          onBlur={evt => handleBlur(evt, "phone")}
          type="tel"
          defaultValue="1234567890"
        />

        <TextField
          label="Social security number (SSN)"
          mask="ssn"
          name="ssn_example"
          onBlur={evt => handleBlur(evt, "ssn")}
          defaultValue="123456789"
        />

        <TextField
          label="Zip code"
          mask="zip"
          name="zip_example"
          onBlur={evt => handleBlur(evt, "zip")}
          defaultValue="123456789"
        />

        <ControlledCurrencyField />
      </div>
    );
  };

  class ModalExample extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showModal: false
      };
    }

    hideModal() {
      this.setState({ showModal: false });
    }

    showModal() {
      this.setState({ showModal: true });
    }

    render() {
      return (
        <div id="App" style={{ minHeight: 300 }}>
          <Button
            onClick={() => this.showModal()}
            size="big"
            variation="success"
          >
            Click to show modal
          </Button>

          {this.state.showModal && (
            <Dialog
              onExit={() => this.hideModal()}
              getApplicationNode={() => document.getElementById("App")}
              title="Dialog title"
              actions={[
                <button
                  className="ds-c-button ds-c-button--primary"
                  key="primary"
                >
                  Dialog action
                </button>,
                <button
                  className="ds-c-button ds-c-button--transparent"
                  key="cancel"
                  onClick={() => this.hideModal()}
                >
                  Cancel
                </button>
              ]}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              accumsan diam vitae metus lacinia, eget tempor purus placerat.
            </Dialog>
          )}
        </div>
      );
    }
  }

  class MonthPickerExample extends React.PureComponent {
    render() {
      return (
        <div>
          <MonthPicker
            name="months"
            label="Select the months you were eligible for employer coverage in 2017"
            hint={
              <span>
                This is a long-form explanation of what we mean by employer
                coverage, and at the end of this sentence is a link to{" "}
                <a href="#more-info" className="ds-u-color--inherit">
                  find out more about employer coverage
                </a>
                .
              </span>
            }
            selectAllText="Select all"
            clearAllText="Clear all"
          />
          <MonthPicker
            name="cryosleep-months"
            label="Select the months you were in cryosleep during 2046"
            disabledMonths={[7, 8, 9, 10, 11, 12]}
          />
        </div>
      );
    }
  }

  class SkipNavExample extends React.PureComponent {
    render() {
      return (
        <div>
          <SkipNav
            href="#main"
            onClick={event => {
              event.preventDefault();
              const main = document.getElementById("main");
              if (main) main.focus();
            }}
          />
          <a href="#">Navigation link</a>
          <main
            id="main"
            class="ds-u-padding--4 ds-u-fill--gray-lightest"
            tabindex="0"
          >
            Main content
          </main>
        </div>
      );
    }
  }

  class TabsExample extends React.PureComponent {
    render() {
      return (
        <div>
          <Tabs>
            <TabPanel id="summary" tab="Summary">
              The Bill of Rights is the first ten amendments to the United
              States Constitution.
            </TabPanel>
            <TabPanel id="preamble" tab="Preamble">
              We the People of the United States, in Order to form a more
              perfect Union, establish Justice, insure domestic Tranquility,
              provide for the common defence, promote the general Welfare, and
              secure the Blessings of Liberty to ourselves and our Posterity, do
              ordain and establish this Constitution for the United States of
              America.
            </TabPanel>
            <TabPanel id="amendments" tab="Amendments">
              <h2 className="ds-h4">Bill of Rights</h2>

              <ol className="ds-c-list">
                <li>Freedoms, Petitions, Assembly</li>
                <li>Right to bear arms</li>
                <li>Quartering of soldiers</li>
                <li>Search and arrest</li>
                <li>Rights in criminal cases</li>
                <li>Right to a fair trial</li>
                <li>Rights in civil cases</li>
                <li>Bail, fines, punishment</li>
                <li>Rights retained by the People</li>
                <li>States’ rights</li>
              </ol>

              <h2 className="ds-h4">Later Amendments</h2>

              <ol className="ds-c-list" start="11">
                <li>Lawsuits against states</li>
                <li>Presidential elections</li>
                <li>Abolition of slavery</li>
                <li>Civil rights</li>
                <li>Black suffrage</li>
                <li>Income taxes</li>
                <li>Senatorial elections</li>
                <li>Prohibition of liquor</li>
                <li>Women’s suffrage</li>
                <li>Terms of office</li>
                <li>Repeal of Prohibition</li>
                <li>Term Limits for the Presidency</li>
                <li>Washington, D.C., suffrage</li>
                <li>Abolition of poll taxes</li>
                <li>Presidential succession</li>
                <li>18-year-old suffrage</li>
                <li>Congressional pay raises</li>
              </ol>
            </TabPanel>
            <TabPanel id="disabled" tab="Disabled" disabled>
              You should not see this.
            </TabPanel>
          </Tabs>
        </div>
      );
    }
  }

  class TextFieldExample extends React.PureComponent {
    render() {
      return (
        <div>
          <TextField
            defaultValue="Example value"
            label="Single line"
            labelClassName="ds-u-margin-top--0"
            name="single_example"
            requirementLabel="Optional"
          />
          <TextField
            defaultValue="123"
            label="Number field"
            name="number_example"
            type="number"
          />
          <TextField
            label="Small size modifier"
            name="small_example"
            size="small"
          />
          <TextField
            label="Medium size modifier"
            name="medium_example"
            size="medium"
          />
          <TextField
            errorMessage="Error message example"
            hint="Example of a multiline field with an error"
            label="Multiline"
            multiline
            name="multiline_example"
          />
          <TextField
            label="Disabled field"
            disabled
            name="disabled_example"
            value="Example value"
          />
          <TextField
            label="Password field"
            name="disabled_example"
            type="password"
            value="Example value"
          />
        </div>
      );
    }
  }
  class VerticalNavExample extends React.PureComponent {
    render() {
      return (
        <div>
          <VerticalNav
            selectedId="team"
            items={[
              {
                label: "Parent link",
                url: "javascript:void(0);"
              },
              {
                label: "Current page",
                selected: true,
                items: [
                  {
                    id: "childlink1",
                    label: "Child link",
                    url: "javascript:void(0);"
                  },
                  {
                    label: "Child link",
                    selected: true,
                    items: [
                      {
                        id: "grandchildlink1",
                        label: "Grandchild link",
                        url: "javascript:void(0);"
                      },
                      {
                        id: "grandchildlink2",
                        label: "Grandchild link",
                        url: "javascript:void(0);",
                        selected: true
                      }
                    ]
                  },
                  {
                    id: "childlink3",
                    label: "Child link",
                    url: "javascript:void(0);"
                  }
                ]
              },
              {
                label: "Parent link",
                url: "javascript:void(0);"
              }
            ]}
          />
        </div>
      );
    }
  }

  class LinkExample extends React.PureComponent {
    render() {
      return (
        <div>
          <a href="">This is a regular link</a>
        </div>
      );
    }
  }
  return (
    <div>
      <h1>Examples</h1>
      <h2>Autocomplete</h2>
      <AutocompleteExample></AutocompleteExample>
      <h2>Button</h2>
      <ButtonExample></ButtonExample>
      <h2>Choice list</h2>
      <ChoiceListExample></ChoiceListExample>
      <h2>Date field</h2>
      <DateFieldExample></DateFieldExample>
      <h2>Dropdown</h2>
      <DropdownExample></DropdownExample>
      <h2>Help drawer</h2>
      <HelpDrawerExample></HelpDrawerExample>
      <h2>Masked field</h2>
      <ControlledCurrencyFieldExample></ControlledCurrencyFieldExample>
      <h2>Modal</h2>
      <ModalExample></ModalExample>
      <h2>Month picker</h2>
      <MonthPickerExample></MonthPickerExample>
      <h2>Skip nav</h2>
      <SkipNavExample></SkipNavExample>
      <h2>Tabs</h2>
      <TabsExample></TabsExample>
      <h2>Text field</h2>
      <TextFieldExample></TextFieldExample>
      <h2>Vertical nav</h2>
      <VerticalNavExample></VerticalNavExample>
      <h2>Link</h2>
      <LinkExample></LinkExample>
    </div>
  );
};

ReactDOM.render(<Example />, document.querySelector("#jsx-root"));
