import { describe, it, expect } from "vitest";
import { 
  getRoute, 
  getServiceRoutes, 
  isValidRoute, 
  debugRouteMapping,
  SERVICE_ROUTES,
  MAIN_ROUTES,
  CTA_PATTERNS,
  CONTACT_PATTERNS
} from "./navigation-mapper";

/**
 * Test suite for TASK-004: Create Navigation Mapping Utility
 * 
 * Comprehensive testing for intelligent navigation routing based on button/link text.
 * Tests all acceptance criteria and edge cases.
 */

describe("Navigation Mapper - TASK-004", () => {
  describe("Main Navigation Routes", () => {
    it("should map home page variations correctly", () => {
      expect(getRoute("Home")).toBe("/");
      expect(getRoute("Homepage")).toBe("/");
      expect(getRoute("Main")).toBe("/");
      expect(getRoute("HOME")).toBe("/"); // Case insensitive
      expect(getRoute(" home ")).toBe("/"); // Whitespace handling
    });

    it("should map about page variations correctly", () => {
      expect(getRoute("About")).toBe("/about");
      expect(getRoute("About Us")).toBe("/about");
      expect(getRoute("Our Story")).toBe("/about");
      expect(getRoute("Who We Are")).toBe("/about");
      expect(getRoute("ABOUT US")).toBe("/about"); // Case insensitive
    });

    it("should map contact page variations correctly", () => {
      expect(getRoute("Contact")).toBe("/contact");
      expect(getRoute("Contact Us")).toBe("/contact");
      expect(getRoute("Get in Touch")).toBe("/contact");
      expect(getRoute("Reach Out")).toBe("/contact");
      expect(getRoute("Contact Our Team")).toBe("/contact");
    });
  });

  describe("Service Route Mapping", () => {
    it("should map accommodation & tenancy services", () => {
      expect(getRoute("Accommodation Tenancy")).toBe("/AccommodationTenancy");
      expect(getRoute("Accommodation & Tenancy")).toBe("/AccommodationTenancy");
      expect(getRoute("Housing")).toBe("/AccommodationTenancy");
      expect(getRoute("Housing Services")).toBe("/AccommodationTenancy");
      expect(getRoute("Contact Our Housing Team")).toBe("/AccommodationTenancy");
    });

    it("should map life stage transition services", () => {
      expect(getRoute("Assist Life Stage Transition")).toBe("/AssistLifeStageTransition");
      expect(getRoute("Life Stage Transition")).toBe("/AssistLifeStageTransition");
      expect(getRoute("Transition Support")).toBe("/AssistLifeStageTransition");
      expect(getRoute("Contact Our Transition Team")).toBe("/AssistLifeStageTransition");
    });

    it("should map personal activities services", () => {
      expect(getRoute("Assist Personal Activities")).toBe("/AssistPersonalActivities");
      expect(getRoute("Personal Activities")).toBe("/AssistPersonalActivities");
      expect(getRoute("Personal Care")).toBe("/AssistPersonalActivities");
      expect(getRoute("Contact Our Support Team")).toBe("/AssistPersonalActivities");
    });

    it("should map travel & transport services", () => {
      expect(getRoute("Assist Travel Transport")).toBe("/AssistTravelTransport");
      expect(getRoute("Travel & Transport")).toBe("/AssistTravelTransport");
      expect(getRoute("Transport Services")).toBe("/AssistTravelTransport");
      expect(getRoute("Contact Our Travel Team")).toBe("/AssistTravelTransport");
    });

    it("should map shared living services", () => {
      expect(getRoute("Shared Living")).toBe("/SharedLiving");
      expect(getRoute("Supported Living")).toBe("/SharedLiving");
      expect(getRoute("Independent Living")).toBe("/SharedLiving");
      expect(getRoute("Contact Our Living Team")).toBe("/SharedLiving");
    });

    it("should map community participation services", () => {
      expect(getRoute("Community Participation")).toBe("/CommunityParticipation");
      expect(getRoute("Community Involvement")).toBe("/CommunityParticipation");
      expect(getRoute("Contact Our Community Team")).toBe("/CommunityParticipation");
    });

    it("should map development life skills services", () => {
      expect(getRoute("Development Life Skills")).toBe("/DevelopmentLifeSkills");
      expect(getRoute("Life Skills")).toBe("/DevelopmentLifeSkills");
      expect(getRoute("Skill Development")).toBe("/DevelopmentLifeSkills");
      expect(getRoute("Contact Our Skills Team")).toBe("/DevelopmentLifeSkills");
    });

    it("should map assistive products services", () => {
      expect(getRoute("Assistive Products")).toBe("/AssistiveProducts");
      expect(getRoute("Assistive Technology")).toBe("/AssistiveProducts");
      expect(getRoute("Equipment")).toBe("/AssistiveProducts");
      expect(getRoute("Contact Our Products Team")).toBe("/AssistiveProducts");
    });

    it("should map participate in community services", () => {
      expect(getRoute("Participate in Community")).toBe("/ParticipateInCommunity");
      expect(getRoute("Community Services")).toBe("/ParticipateInCommunity");
      expect(getRoute("Social Activities")).toBe("/ParticipateInCommunity");
    });

    it("should map group centre activities", () => {
      expect(getRoute("Group Centre Activities")).toBe("/GroupCentreActivities");
      expect(getRoute("Group Activities")).toBe("/GroupCentreActivities");
      expect(getRoute("Centre Activities")).toBe("/GroupCentreActivities");
      expect(getRoute("Day Programs")).toBe("/GroupCentreActivities");
    });
  });

  describe("CTA Pattern Mapping", () => {
    it("should map getting started patterns to contact", () => {
      expect(getRoute("Get Started")).toBe("/contact");
      expect(getRoute("Start Your Journey")).toBe("/contact");
      expect(getRoute("Start Your Journey With Us")).toBe("/contact");
      expect(getRoute("Get Started Today")).toBe("/contact");
      expect(getRoute("Begin Your Journey")).toBe("/contact");
    });

    it("should map consultation patterns to contact", () => {
      expect(getRoute("Schedule Consultation")).toBe("/contact");
      expect(getRoute("Book Consultation")).toBe("/contact");
      expect(getRoute("Free Consultation")).toBe("/contact");
      expect(getRoute("Talk to Us")).toBe("/contact");
    });

    it("should handle ambiguous learn more patterns", () => {
      expect(getRoute("Learn More")).toBe("#"); // Default fallback
      expect(getRoute("Find Out More")).toBe("#");
      expect(getRoute("Discover More")).toBe("#");
    });
  });

  describe("Contact Pattern Detection", () => {
    it("should detect and format phone numbers", () => {
      expect(getRoute("+61 2 1234 5678")).toBe("tel:+61212345678");
      expect(getRoute("0412 345 678")).toBe("tel:0412345678");
      expect(getRoute("(02) 1234-5678")).toBe("tel:0212345678");
    });

    it("should detect and format email addresses", () => {
      expect(getRoute("contact@qualitycareproviders.com.au")).toBe("mailto:contact@qualitycareproviders.com.au");
      expect(getRoute("info@example.com")).toBe("mailto:info@example.com");
    });

    it("should map email-related text", () => {
      expect(getRoute("Email Us")).toBe("mailto:contact@qualitycareproviders.com.au");
      expect(getRoute("Send Email")).toBe("mailto:contact@qualitycareproviders.com.au");
    });
  });

  describe("Text Normalization", () => {
    it("should handle case insensitive matching", () => {
      expect(getRoute("CONTACT US")).toBe("/contact");
      expect(getRoute("contact us")).toBe("/contact");
      expect(getRoute("Contact Us")).toBe("/contact");
      expect(getRoute("CoNtAcT uS")).toBe("/contact");
    });

    it("should trim whitespace correctly", () => {
      expect(getRoute("  Contact Us  ")).toBe("/contact");
      expect(getRoute("\n\tAbout\n")).toBe("/about");
      expect(getRoute("   Get Started   ")).toBe("/contact");
    });

    it("should handle special characters", () => {
      expect(getRoute("Travel & Transport")).toBe("/AssistTravelTransport");
      expect(getRoute("Accommodation-Tenancy")).toBe("/AccommodationTenancy");
      expect(getRoute("Contact Us!")).toBe("/contact");
      expect(getRoute("Get Started?")).toBe("/contact");
    });

    it("should normalize multiple spaces", () => {
      expect(getRoute("Contact    Us")).toBe("/contact");
      expect(getRoute("About     Us")).toBe("/about");
      expect(getRoute("Get   Started")).toBe("/contact");
    });
  });

  describe("Partial Matching", () => {
    it("should find partial matches for service keywords", () => {
      expect(getRoute("Our Accommodation Services")).toBe("/AccommodationTenancy");
      expect(getRoute("Travel Support Available")).toBe("/AssistTravelTransport");
      expect(getRoute("Community Programs and Activities")).toBe("/CommunityParticipation"); // More specific match
      expect(getRoute("Skills Training")).toBe("/DevelopmentLifeSkills");
    });

    it("should find partial matches for contact keywords", () => {
      expect(getRoute("Need to Contact Someone?")).toBe("/contact");
      expect(getRoute("Ready to Get Started?")).toBe("/contact");
      expect(getRoute("Begin Your Journey Today")).toBe("/contact");
    });

    it("should find partial matches for about keywords", () => {
      expect(getRoute("Learn About Our Company")).toBe("/about");
      expect(getRoute("Our Story and Mission")).toBe("/about");
    });
  });

  describe("Context-Based Routing", () => {
    it("should provide context-based routing capability", () => {
      // Test that context parameter is accepted and processed
      expect(getRoute("Learn More", "accommodation")).toBe("#"); // Fallback when context doesn't match
      expect(getRoute("Learn More", "")).toBe("#"); // Empty context
      expect(getRoute("Learn More")).toBe("#"); // No context
      
      // The context feature exists and can be enhanced in the future
      expect(typeof getRoute("Learn More", "some context")).toBe("string");
    });

    it("should fallback to default when context doesn't help", () => {
      expect(getRoute("Learn More", "General Information")).toBe("#");
      expect(getRoute("Learn More", "")).toBe("#");
      expect(getRoute("Learn More")).toBe("#");
    });
  });

  describe("Edge Cases and Error Handling", () => {
    it("should handle empty or invalid input", () => {
      expect(getRoute("")).toBe("#");
      expect(getRoute("   ")).toBe("#");
      // Testing null/undefined/number inputs (TypeScript allows any for testing)
      expect(getRoute(null as any)).toBe("#");
      expect(getRoute(undefined as any)).toBe("#");
      expect(getRoute(123 as any)).toBe("#");
    });

    it("should handle unmapped text gracefully", () => {
      expect(getRoute("Random Unmapped Text")).toBe("#");
      expect(getRoute("XYZ123")).toBe("#");
      expect(getRoute("!!!@@@###")).toBe("#");
    });

    it("should handle very long text", () => {
      const longText = "This is a very long button text that should not match anything specific but should be handled gracefully";
      expect(getRoute(longText)).toBe("#");
    });
  });

  describe("Route Validation", () => {
    it("should validate internal routes correctly", () => {
      expect(isValidRoute("/")).toBe(true);
      expect(isValidRoute("/about")).toBe(true);
      expect(isValidRoute("/contact")).toBe(true);
      expect(isValidRoute("/AccommodationTenancy")).toBe(true);
      expect(isValidRoute("/GroupCentreActivities")).toBe(true);
    });

    it("should validate external routes correctly", () => {
      expect(isValidRoute("tel:+61212345678")).toBe(true);
      expect(isValidRoute("mailto:test@example.com")).toBe(true);
      expect(isValidRoute("https://example.com")).toBe(true);
      expect(isValidRoute("http://example.com")).toBe(true);
    });

    it("should reject invalid routes", () => {
      expect(isValidRoute("/invalid-route")).toBe(false);
      expect(isValidRoute("#")).toBe(false);
      expect(isValidRoute("")).toBe(false);
      expect(isValidRoute("invalid")).toBe(false);
    });
  });

  describe("Service Routes Utility", () => {
    it("should return all service routes with proper formatting", () => {
      const serviceRoutes = getServiceRoutes();
      
      expect(serviceRoutes).toBeInstanceOf(Array);
      expect(serviceRoutes.length).toBeGreaterThan(0);
      
      // Check structure of returned objects
      serviceRoutes.forEach(route => {
        expect(route).toHaveProperty('name');
        expect(route).toHaveProperty('path');
        expect(route).toHaveProperty('slug');
        expect(typeof route.name).toBe('string');
        expect(typeof route.path).toBe('string');
        expect(typeof route.slug).toBe('string');
        expect(route.path.startsWith('/')).toBe(true);
        expect(route.slug).toBe(route.path.slice(1));
      });
    });

    it("should not include CTA variations in service routes", () => {
      const serviceRoutes = getServiceRoutes();
      const routeNames = serviceRoutes.map(r => r.name.toLowerCase());
      
      expect(routeNames.every(name => !name.includes('contact our'))).toBe(true);
    });
  });

  describe("Debug Utility", () => {
    it("should provide debugging information for route mapping", () => {
      const testTexts = [
        "Contact Us",
        "About",
        "Accommodation",
        "Invalid Text",
        "Get Started"
      ];
      
      const debugResults = debugRouteMapping(testTexts);
      
      expect(debugResults).toBeInstanceOf(Array);
      expect(debugResults.length).toBe(testTexts.length);
      
      debugResults.forEach(result => {
        expect(result).toHaveProperty('text');
        expect(result).toHaveProperty('route');
        expect(result).toHaveProperty('valid');
        expect(typeof result.text).toBe('string');
        expect(typeof result.route).toBe('string');
        expect(typeof result.valid).toBe('boolean');
      });
    });
  });

  describe("Real-world Button Text Examples", () => {
    it("should handle actual button text from the application", () => {
      // From Index.tsx
      expect(getRoute("Start Your Journey With Us")).toBe("/contact");
      
      // From various service pages
      expect(getRoute("Contact Our Housing Team")).toBe("/AccommodationTenancy");
      expect(getRoute("Contact Our Travel Team")).toBe("/AssistTravelTransport");
      expect(getRoute("Contact Our Support Team")).toBe("/AssistPersonalActivities");
      expect(getRoute("Contact Our Skills Team")).toBe("/DevelopmentLifeSkills");
      expect(getRoute("Contact Our Products Team")).toBe("/AssistiveProducts");
      expect(getRoute("Contact Our Community Team")).toBe("/CommunityParticipation");
      expect(getRoute("Contact Our Living Team")).toBe("/SharedLiving");
      expect(getRoute("Contact Our Transition Team")).toBe("/AssistLifeStageTransition");
      
      // From About page
      expect(getRoute("Contact us")).toBe("/contact");
      
      // From various CTA sections
      expect(getRoute("Get Started Today")).toBe("/contact");
      expect(getRoute("Start Your Journey")).toBe("/contact");
    });

    it("should handle service names as they appear in navigation", () => {
      expect(getRoute("Accommodation Tenancy")).toBe("/AccommodationTenancy");
      expect(getRoute("Assist-Life Stage, Transition")).toBe("/AssistLifeStageTransition");
      expect(getRoute("Assist-Personal Activities")).toBe("/AssistPersonalActivities");
      expect(getRoute("Assist-Travel/Transport")).toBe("/AssistTravelTransport");
      expect(getRoute("Shared Living")).toBe("/SharedLiving");
      expect(getRoute("Community Participation")).toBe("/CommunityParticipation");
      expect(getRoute("Development-Life Skills")).toBe("/DevelopmentLifeSkills");
      expect(getRoute("Assistive Products")).toBe("/AssistiveProducts");
      expect(getRoute("Participate in Community")).toBe("/ParticipateInCommunity");
      expect(getRoute("Group/Centre Activities")).toBe("/GroupCentreActivities");
    });
  });

  describe("Performance and Reliability", () => {
    it("should handle multiple calls efficiently", () => {
      const startTime = performance.now();
      
      for (let i = 0; i < 1000; i++) {
        getRoute("Contact Us");
        getRoute("About");
        getRoute("Get Started");
      }
      
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // Should complete 3000 calls in under 100ms
      expect(duration).toBeLessThan(100);
    });

    it("should be deterministic", () => {
      const testCases = [
        "Contact Us",
        "About",
        "Accommodation",
        "Get Started",
        "Learn More"
      ];
      
      testCases.forEach(text => {
        const result1 = getRoute(text);
        const result2 = getRoute(text);
        const result3 = getRoute(text);
        
        expect(result1).toBe(result2);
        expect(result2).toBe(result3);
      });
    });
  });
});

/**
 * Integration Test Scenarios
 * 
 * Manual testing scenarios for browser verification:
 * 
 * 1. Navigation Bar Testing:
 *    - Click "Home" → should route to "/"
 *    - Click "About Us" → should route to "/about"
 *    - Click "Contact Us" → should route to "/contact"
 *    - Click each service in dropdown → should route to correct service page
 * 
 * 2. CTA Button Testing:
 *    - Click "Start Your Journey With Us" → should route to "/contact"
 *    - Click "Get Started Today" → should route to "/contact"
 *    - Click service-specific "Contact Our X Team" → should route to service page
 * 
 * 3. Footer Testing:
 *    - Test all footer links use navigation mapper
 *    - Verify phone numbers create tel: links
 *    - Verify email addresses create mailto: links
 * 
 * 4. Service Page Testing:
 *    - Test "Learn More" buttons with proper context
 *    - Test cross-service navigation
 *    - Verify all CTAs route correctly
 * 
 * 5. Edge Case Testing:
 *    - Test with malformed button text
 *    - Test with very long text content
 *    - Test with special characters and unicode
 */