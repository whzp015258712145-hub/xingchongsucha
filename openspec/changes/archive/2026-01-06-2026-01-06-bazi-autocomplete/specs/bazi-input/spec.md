# Spec: Bazi Input History & Autocomplete

## ADDED Requirements

### Requirement: Persist and Restore Last Input
The system MUST persist the last successfully generated Bazi and use it as a placeholder hint for future inputs.

#### Scenario: Displaying Last Input as Placeholder
- **Given** the user has previously successfully generated a Bazi (e.g., "甲子", "乙丑", "丙寅", "丁卯")
- **And** the user refreshes the page or clears the inputs
- **When** the input fields are displayed
- **Then** the placeholders for Year, Month, Day, and Hour should show "甲子", "乙丑", "丙寅", "丁卯" respectively
- **And** the placeholders should NOT show the current real-time date.

#### Scenario: Fallback to Current Time
- **Given** the user has never entered a Bazi (first visit or cleared cache)
- **When** the input fields are displayed
- **Then** the placeholders should default to the current Date/Time and GanZhi (e.g., "2024 / 甲辰").

#### Scenario: Saving Input
- **Given** the user enters a new Bazi or Date
- **When** the user triggers the generation (Enter or focus out/generate)
- **Then** the resulting GanZhi should be saved to storage as the "last Bazi".

### Requirement: Tab Autocomplete
The system MUST allow users to autofill the input fields with the saved Bazi using the Tab key.

#### Scenario: Autocompleting with Tab
- **Given** the input fields are empty
- **And** there is a saved "last Bazi" in history
- **When** the user focuses on any of the input fields (Year, Month, Day, or Hour)
- **And** presses the `Tab` key
- **Then** ALL input fields should be populated with the saved Bazi values
- **And** the focus should NOT move to the next element (default Tab behavior prevented for the autocomplete action)