# Launch Readiness Specs

## ADDED Requirements

### Requirement: Application Metadata
The application MUST provide standard metadata for SEO, Social Sharing, and Mobile capability.

#### Scenario: SEO tags are present
Given the `index.html` file
Then it should contain a `<meta name="description">` tag with content describing the "Bazi Lookup" functionality
And it should contain a `<meta name="keywords">` tag with relevant keywords like "八字, 刑冲"

#### Scenario: Social Graph tags are present
Given the `index.html` file
Then it should contain `<meta property="og:title">`, `<meta property="og:description">`, and `<meta property="og:type">` tags

#### Scenario: Mobile Web App capability
Given the `index.html` file
Then it should contain `<meta name="apple-mobile-web-app-capable" content="yes">`
And it should contain `<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">`

#### Scenario: Project Version is 1.0.0
Given the `package.json` file
Then the `version` field should be set to "1.0.0"
And the `description` field should be populated

### Requirement: User Interface Polish
Decorative elements MUST NOT be interactive to maintain a native app feel.

#### Scenario: Xiangyun images are not draggable
Given the `RelationshipChart.tsx` component
When the `xiangyun` image is rendered
Then it should have the `draggable` attribute set to `false`
And it should have CSS classes that prevent user selection (e.g., `select-none`)
And it should have CSS classes that prevent pointer events (e.g., `pointer-events-none`) if clicks are not needed
