"use client"

import { useEffect } from 'react'

// Google Analytics 4 Configuration
const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your actual GA4 ID

// Initialize Google Analytics
export function initializeGA() {
  if (typeof window !== 'undefined' && !window.gtag) {
    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

// Track page views
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export function trackEvent(eventName: string, parameters: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Track form submissions
export function trackFormSubmission(formName: string, formData: Record<string, any>) {
  trackEvent('form_submit', {
    form_name: formName,
    form_data: formData,
    event_category: 'engagement',
    event_label: 'lead_generation'
  })
}

// Track button clicks
export function trackButtonClick(buttonName: string, buttonLocation: string) {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
    event_category: 'engagement',
    event_label: 'cta_click'
  })
}

// Track service interest
export function trackServiceInterest(serviceName: string, serviceCategory: string) {
  trackEvent('service_interest', {
    service_name: serviceName,
    service_category: serviceCategory,
    event_category: 'engagement',
    event_label: 'service_view'
  })
}

// Track consultation requests
export function trackConsultationRequest(serviceType: string, budget: string) {
  trackEvent('consultation_request', {
    service_type: serviceType,
    budget_range: budget,
    event_category: 'conversion',
    event_label: 'consultation_lead'
  })
}

// Analytics Component
export function Analytics() {
  useEffect(() => {
    initializeGA()
  }, [])

  return null
}

// Enhanced conversion tracking
export const conversionEvents = {
  // Lead generation events
  LEAD_FORM_SUBMIT: 'lead_form_submit',
  CONSULTATION_REQUEST: 'consultation_request',
  DOWNLOAD_GUIDE: 'download_guide',
  SCHEDULE_CALL: 'schedule_call',
  
  // Engagement events
  SERVICE_PAGE_VIEW: 'service_page_view',
  TEAM_PAGE_VIEW: 'team_page_view',
  TESTIMONIAL_VIEW: 'testimonial_view',
  CONTACT_PAGE_VIEW: 'contact_page_view',
  
  // Financial service specific events
  FINANCIAL_ADVISORY_INTEREST: 'financial_advisory_interest',
  RISK_MANAGEMENT_INTEREST: 'risk_management_interest',
  DIGITAL_TRANSFORMATION_INTEREST: 'digital_transformation_interest',
  
  // User journey events
  HERO_CTA_CLICK: 'hero_cta_click',
  FLOATING_CTA_CLICK: 'floating_cta_click',
  FOOTER_CTA_CLICK: 'footer_cta_click',
  NAVIGATION_CLICK: 'navigation_click'
}

// Performance tracking
export function trackPerformance(metric: string, value: number) {
  trackEvent('performance_metric', {
    metric_name: metric,
    metric_value: value,
    event_category: 'performance'
  })
}

// Error tracking
export function trackError(error: Error, errorContext: string) {
  trackEvent('error', {
    error_message: error.message,
    error_stack: error.stack,
    error_context: errorContext,
    event_category: 'error'
  })
}

// User behavior tracking
export function trackUserBehavior(action: string, page: string, element: string) {
  trackEvent('user_behavior', {
    action: action,
    page: page,
    element: element,
    event_category: 'user_behavior'
  })
}

// Financial compliance tracking
export function trackComplianceAction(action: string, document: string) {
  trackEvent('compliance_action', {
    action: action,
    document: document,
    event_category: 'compliance'
  })
}

// A/B testing tracking
export function trackABTest(variant: string, testName: string, conversion: boolean) {
  trackEvent('ab_test', {
    variant: variant,
    test_name: testName,
    conversion: conversion,
    event_category: 'ab_testing'
  })
}

// Enhanced Analytics with Financial Services Focus
export class FinancialAnalytics {
  static trackLeadQuality(leadData: {
    service: string
    budget: string
    companySize: string
    industry: string
  }) {
    trackEvent('lead_quality_assessment', {
      ...leadData,
      event_category: 'lead_quality',
      event_label: 'lead_scoring'
    })
  }

  static trackRegulatoryCompliance(page: string, action: string) {
    trackEvent('regulatory_compliance', {
      page: page,
      action: action,
      event_category: 'compliance',
      event_label: 'regulatory_tracking'
    })
  }

  static trackServiceEngagement(service: string, engagementType: string) {
    trackEvent('service_engagement', {
      service: service,
      engagement_type: engagementType,
      event_category: 'service_engagement',
      event_label: 'service_interaction'
    })
  }

  static trackTrustSignal(trustElement: string, userAction: string) {
    trackEvent('trust_signal', {
      trust_element: trustElement,
      user_action: userAction,
      event_category: 'trust_building',
      event_label: 'credibility_impact'
    })
  }
}

// Heatmap tracking (if using Hotjar or similar)
export function trackHeatmapInteraction(element: string, interaction: string) {
  if (typeof window !== 'undefined' && (window as any).hj) {
    (window as any).hj('trigger', 'heatmap_interaction', {
      element: element,
      interaction: interaction
    })
  }
}

// Session recording tracking
export function trackSessionRecording(action: string, details: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).hj) {
    (window as any).hj('trigger', 'session_recording', {
      action: action,
      details: details
    })
  }
}

// Enhanced conversion funnel tracking
export const conversionFunnel = {
  AWARENESS: 'awareness',
  INTEREST: 'interest',
  CONSIDERATION: 'consideration',
  INTENT: 'intent',
  EVALUATION: 'evaluation',
  PURCHASE: 'purchase'
}

export function trackFunnelStage(stage: string, userData: Record<string, any>) {
  trackEvent('funnel_stage', {
    stage: stage,
    ...userData,
    event_category: 'conversion_funnel',
    event_label: 'funnel_progression'
  })
}

// Real-time analytics dashboard data
export function getAnalyticsData() {
  return {
    pageViews: 0,
    uniqueVisitors: 0,
    conversionRate: 0,
    averageSessionDuration: 0,
    bounceRate: 0,
    topPages: [],
    topServices: [],
    leadSources: [],
    conversionFunnel: {}
  }
} 