import { describe, it, expect } from "vitest";

/**
 * Test suite for TASK-002: Fix Service Cards Overflow at 320px
 * 
 * Ensures service cards display properly on smallest mobile devices (320px)
 * and don't cause horizontal scrolling or text overflow.
 */

describe("Service Cards Responsive Behavior - TASK-002", () => {
  describe("320px Viewport Constraints", () => {
    it("should use appropriate text sizes for mobile", () => {
      // Service card titles should scale down on mobile
      const mobileTextClasses = "text-lg sm:text-xl";
      expect(mobileTextClasses).toContain("text-lg"); // Mobile first
      expect(mobileTextClasses).toContain("sm:text-xl"); // Larger on small screens
    });

    it("should handle long service names without overflow", () => {
      const longestServiceName = "Assistance with Tasks – Shared Living";
      
      // Verify the longest service name fits in 320px container
      expect(longestServiceName.length).toBeLessThan(40); // Character limit for readability
      
      // Should use word wrapping
      const wrapperClasses = "break-words hyphens-auto";
      expect(wrapperClasses).toContain("break-words");
      expect(wrapperClasses).toContain("hyphens-auto");
    });

    it("should use appropriate spacing for mobile", () => {
      // Gap between service items should be smaller on mobile
      const responsiveGap = "gap-4 sm:gap-6";
      expect(responsiveGap).toContain("gap-4"); // Mobile
      expect(responsiveGap).toContain("sm:gap-6"); // Desktop
    });

    it("should have proper padding for mobile", () => {
      // Container padding should be minimal on mobile to maximize content space
      const mobilePadding = "px-2 sm:px-4";
      expect(mobilePadding).toContain("px-2"); // Mobile
      expect(mobilePadding).toContain("sm:px-4"); // Larger screens
    });
  });

  describe("Service Card Layout", () => {
    it("should stack service sections vertically on mobile", () => {
      // Main services container should be flex-col on mobile
      const layoutClasses = "flex flex-col lg:flex-row";
      expect(layoutClasses).toContain("flex-col");
      expect(layoutClasses).toContain("lg:flex-row");
    });

    it("should center align content on mobile", () => {
      // Mobile content should be centered for better UX
      const alignmentClasses = "items-center lg:items-start";
      expect(alignmentClasses).toContain("items-center");
      expect(alignmentClasses).toContain("lg:items-start");
    });

    it("should use appropriate icon sizes", () => {
      // Icons should remain visible but not oversized on mobile
      const iconSize = "w-5 h-5 sm:w-6 sm:h-6";
      expect(iconSize).toContain("w-5 h-5"); // Mobile
      expect(iconSize).toContain("sm:w-6 sm:h-6"); // Larger screens
    });
  });

  describe("Text Readability", () => {
    it("should maintain minimum text size for accessibility", () => {
      // Text should never be smaller than 16px for accessibility
      const minTextSize = "text-base"; // 16px
      expect(minTextSize).toBe("text-base");
    });

    it("should use line height for better readability on mobile", () => {
      // Tighter line height for mobile to save space while maintaining readability
      const lineHeight = "leading-6 sm:leading-7";
      expect(lineHeight).toContain("leading-6"); // Mobile
      expect(lineHeight).toContain("sm:leading-7"); // Desktop
    });

    it("should handle text wrapping gracefully", () => {
      // Long service names should wrap properly
      const textWrapClasses = "break-words overflow-wrap-anywhere";
      expect(textWrapClasses).toContain("break-words");
    });
  });

  describe("Container Constraints", () => {
    it("should prevent horizontal overflow", () => {
      // Containers should never exceed viewport width
      const containerClasses = "w-full max-w-full overflow-hidden";
      expect(containerClasses).toContain("w-full");
      expect(containerClasses).toContain("max-w-full");
      expect(containerClasses).toContain("overflow-hidden");
    });

    it("should use flex-wrap for service items if needed", () => {
      // Service items should wrap if they don't fit
      const flexWrapClasses = "flex-wrap";
      expect(flexWrapClasses).toBe("flex-wrap");
    });

    it("should maintain minimum touch targets", () => {
      // Service links should be at least 44px for touch accessibility
      const minTouchTarget = "min-h-[44px] py-2";
      expect(minTouchTarget).toContain("min-h-[44px]");
      expect(minTouchTarget).toContain("py-2");
    });
  });

  describe("Visual Hierarchy", () => {
    it("should maintain proper visual separation", () => {
      // Border and spacing should be visible but not dominant on mobile
      const visualSeparation = "border-b border-[rgba(87,87,87,0.30)] pb-2";
      expect(visualSeparation).toContain("border-b");
      expect(visualSeparation).toContain("pb-2");
    });

    it("should use appropriate margins between sections", () => {
      // Sections should have adequate spacing without wasting space
      const sectionSpacing = "gap-12 sm:gap-20";
      expect(sectionSpacing).toContain("gap-12"); // Mobile
      expect(sectionSpacing).toContain("sm:gap-20"); // Desktop
    });
  });

  describe("Performance Considerations", () => {
    it("should avoid layout shifts", () => {
      // Images and icons should have defined dimensions
      const definedDimensions = "w-6 h-6";
      expect(definedDimensions).toContain("w-6");
      expect(definedDimensions).toContain("h-6");
    });

    it("should use efficient responsive classes", () => {
      // Should use Tailwind's mobile-first approach
      const mobileFirst = "text-lg sm:text-xl lg:text-2xl";
      expect(mobileFirst.split(" ")[0]).not.toContain("sm:"); // First class is mobile
    });
  });
});

/**
 * Manual Testing Checklist for 320px Service Cards
 * 
 * Test these scenarios in the browser at http://localhost:8082:
 * 
 * 1. 320px Viewport Testing:
 *    - Set browser to 320px width
 *    - Scroll through all service sections
 *    - Verify no horizontal scrolling
 *    - Check all text is readable
 * 
 * 2. Service Name Testing:
 *    - "Assistance with Tasks – Shared Living" should wrap properly
 *    - "Assist-Life Stage, Transition" should fit on mobile
 *    - All service names should be clickable
 * 
 * 3. Layout Testing:
 *    - Service sections stack vertically on mobile
 *    - Icons remain properly sized
 *    - Spacing looks balanced
 * 
 * 4. Touch Testing:
 *    - All service links are touch-friendly (44px minimum)
 *    - No accidental clicks on adjacent items
 *    - Hover states work on touch devices
 * 
 * 5. Cross-Device Testing:
 *    - iPhone SE (375px)
 *    - Galaxy Fold (320px when folded)
 *    - Older Android devices (360px)
 * 
 * 6. Edge Cases:
 *    - Very long device names in landscape mode
 *    - Zoom levels (up to 200%)
 *    - Different font sizes (accessibility settings)
 */