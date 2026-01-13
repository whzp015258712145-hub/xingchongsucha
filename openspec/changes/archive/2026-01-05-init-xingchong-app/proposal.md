# Proposal: Init XingChongSuCha App

## Summary
Initialize the "XingChongSuCha" (Punishment/Clash Quick Lookup) web application. This app will be a single-page React application that displays the current date in Gan-Zhi format, accepts a user's Bazi input, and calculates astrological relationships (Xing, Chong, He, etc.) between the two.

## Motivation
To provide a beautiful, quick, and easy-to-use tool for checking daily Bazi relationships without manual calculation.

## Goals
- Set up the project structure with React, Vite, and Tailwind CSS.
- Implement the current date Gan-Zhi display.
- Implement a user input form for Bazi (Year, Month, Day, Hour pillars).
- Implement the logic to calculate and display:
    - Heavenly Stems Combinations (天干五合)
    - Earthly Branches Clashes (地支六冲)
    - Earthly Branches Punishments (地支三刑, 自刑)
    - Earthly Branches Harms (地支六害)
    - Earthly Branches Combinations (地支六合, 三合, 三会)
