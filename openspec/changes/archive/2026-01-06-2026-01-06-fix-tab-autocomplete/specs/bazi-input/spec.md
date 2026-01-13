# Spec: Bazi Input History & Autocomplete

## MODIFIED Requirements

### Requirement: Tab Autocomplete
The system MUST allow users to autofill the input fields with the saved Bazi using the Tab key, AND immediately present the results.

#### Scenario: Autocompleting with Tab
- **Given** the input fields are empty
- **And** there is a saved "last Bazi" in history
- **When** the user focuses on any of the input fields (Year, Month, Day, or Hour)
- **And** presses the `Tab` key
- **Then** ALL input fields MUST be populated with the saved Bazi values
- **And** the focus MUST move to the **Hour** input field (the last field)
- **And** the system MUST automatically trigger the Bazi generation (displaying the results) without requiring further user action.
