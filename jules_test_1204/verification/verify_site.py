from playwright.sync_api import sync_playwright, expect

def verify_portfolio():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # 1. Home Page
        print("Navigating to Home...")
        page.goto("http://localhost:8080/index.html")
        expect(page.get_by_role("heading", name="Alex Dev")).to_be_visible()
        page.screenshot(path="verification/1_home.png")
        print("Home screenshot taken.")

        # 2. Dark Mode Toggle
        print("Toggling Dark Mode...")
        page.click("#theme-toggle")
        # Allow transition
        page.wait_for_timeout(500) 
        page.screenshot(path="verification/2_home_dark.png")
        print("Home Dark Mode screenshot taken.")

        # 3. Projects Page
        print("Navigating to Projects...")
        page.click("text=Projects")
        expect(page.get_by_role("heading", name="My Projects")).to_be_visible()
        page.screenshot(path="verification/3_projects.png")
        print("Projects screenshot taken.")

        # 4. Open Modal
        print("Opening Modal...")
        # Click the first "Read More" button
        page.locator(".open-modal").first.click()
        expect(page.locator("#project-modal")).to_be_visible()
        # Wait for modal transition/render
        page.wait_for_timeout(500)
        page.screenshot(path="verification/4_project_modal.png")
        print("Modal screenshot taken.")
        
        # Close Modal
        page.click(".close-modal")
        
        # 5. Contact Page
        print("Navigating to Contact...")
        page.click("text=Contact")
        expect(page.get_by_role("heading", name="Get In Touch")).to_be_visible()
        page.screenshot(path="verification/5_contact.png")
        print("Contact screenshot taken.")

        # 6. Submit Form
        print("Submitting Form...")
        page.fill("#name", "Test User")
        page.fill("#email", "test@example.com")
        page.fill("#message", "This is a test message.")
        page.click("button[type='submit']")
        
        # Wait for success message
        expect(page.locator("#form-feedback")).to_contain_text("Thanks! Your message has been sent successfully.")
        page.screenshot(path="verification/6_contact_success.png")
        print("Form Success screenshot taken.")

        browser.close()

if __name__ == "__main__":
    verify_portfolio()
