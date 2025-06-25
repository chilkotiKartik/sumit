"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Target,
  Clock,
  CheckCircle,
  ArrowRight,
  Quote,
  Star,
  Calendar,
  Menu,
  X,
  Heart,
  TrendingUp,
  Award,
  Globe,
  Lightbulb,
  Shield,
  Zap,
  BookOpen,
  Code,
  Vote,
  Share2,
  ThumbsUp,
  Eye,
  AlertTriangle,
  Camera,
  MessageCircle,
  Trophy,
  Rocket,
  Download,
  Flame,
  Crown,
  Music,
  Video,
  ImageIcon,
  FileText,
  BarChart3,
  Activity,
  CloudLightningIcon as Lightning,
} from "lucide-react"
import Image from "next/image"

export default function SumitManifesto() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [supportCount, setSupportCount] = useState(247)
  const [viewCount, setViewCount] = useState(1543)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [electionCountdown, setElectionCountdown] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45,
  })

  // Typing animation effect
  const fullText = "SUMIT YADAV"
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)
    return () => clearInterval(timer)
  }, [])

  // Live counters and countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setSupportCount((prev) => prev + Math.floor(Math.random() * 3))
      setViewCount((prev) => prev + Math.floor(Math.random() * 5))

      // Update countdown
      setElectionCountdown((prev) => {
        let newSeconds = prev.seconds - 1
        let newMinutes = prev.minutes
        let newHours = prev.hours
        let newDays = prev.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes--
        }
        if (newMinutes < 0) {
          newMinutes = 59
          newHours--
        }
        if (newHours < 0) {
          newHours = 23
          newDays--
        }

        return { days: newDays, hours: newHours, minutes: newMinutes, seconds: newSeconds }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const promises = [
    {
      id: 1,
      title: "Dedicated Girls-Only Groups & Leadership Revolution",
      problem:
        "Events like Paradox require specific girls teams, but currently girls don't get these opportunities or even receive relevant messages. Many female students feel excluded from leadership roles and event participation. This creates a gender gap in house activities and leadership representation.",
      solution:
        "Create girls-only groups where ONLY girls are admins, regardless of whether the Secretary/Deputy is male. Establish dedicated communication channels, mentorship programs, and leadership development initiatives specifically for female students. Launch 'SheLeads Corbett' program with monthly workshops and networking events.",
      implementation: [
        "Form Girls Leadership Council within first month with 10 elected representatives",
        "Create dedicated Discord/Telegram channels with 24/7 moderation",
        "Monthly girls-only events and workshops (coding, design, leadership)",
        "Mentorship pairing program connecting seniors with juniors",
        "Equal representation mandate in all house committees (50% minimum)",
        "Girls-only study groups and project collaboration spaces",
        "Annual 'Women in Tech' conference hosted by Corbett House",
      ],
      icon: <Users className="w-6 h-6" />,
      impact:
        "Better inclusion and opportunities for female students in house activities, 100% increase in female participation",
      timeline: "Implementation: Month 1-2, Full rollout by Month 3",
      budget: "₹8,000 for initial setup, events, and ongoing programs",
      priority: "HIGHEST",
      successMetrics: [
        "50% female participation in all events",
        "10 female leaders in key positions",
        "95% satisfaction rate",
      ],
      testimonial: "This is exactly what we need! Finally someone who understands our challenges. - Priya, 2023 Batch",
    },
    {
      id: 2,
      title: "In-House Opportunity Creation & Talent Retention Hub",
      problem:
        "Many talented students work for other houses (making posters, designs, content creation, etc.) because opportunities aren't available in their own house. We're losing our best creative minds to competitors. Our house lacks a proper talent pipeline and recognition system for creative contributors.",
      solution:
        "Open up opportunities within Corbett House so our own talented members can contribute here instead of working for other houses. Create proper channels, recognition systems, and compensation for in-house contributions. Launch 'Corbett Creative Collective' - a comprehensive talent management system.",
      implementation: [
        "Launch Corbett Creative Hub with dedicated workspace and tools",
        "Skill-based team formation (Design, Content, Tech, Events, Marketing)",
        "Monthly showcase events with prizes and recognition",
        "Recognition and reward system with certificates and recommendations",
        "Collaboration with other departments and external organizations",
        "Freelance marketplace for internal projects",
        "Annual 'Corbett Talent Awards' with cash prizes",
        "Portfolio building workshops and career guidance",
      ],
      icon: <Target className="w-6 h-6" />,
      impact: "Retain talent within Corbett, strengthen internal capabilities, create 50+ internal opportunities",
      timeline: "Implementation: Month 1-3, Talent Hub launch by Month 2",
      budget: "recognition programs, and talent development",
      priority: "HIGH",
      successMetrics: ["80% talent retention rate", "100+ internal projects", "value generated internally"],
      testimonial: "Finally! I can use my design skills for my own house instead of others. - Arjun, Designer",
    },
    {
      id: 3,
      title: "Efficient Media Team & Template System Revolution",
      problem:
        "Current media workflow is inefficient - one person handling multiple meetup posters, taking weeks to complete with mistakes, missing reimbursement deadlines (15 days post-meetup). This creates bottlenecks, poor quality output, and frustrated event organizers. No standardized branding or quality control.",
      solution:
        "Establish a proper media team where each member maintains 10+ ready-made templates. Create standardized workflows, quality control processes, and backup systems to ensure quick turnaround for all house materials. Implement 'MediaFlow Pro' - an automated content creation system.",
      implementation: [
        "Recruit and train 8-member media team with specialized roles",
        "Create 100+ professional templates for all event types",
        "Establish 6-hour turnaround policy for urgent requests",
        "Quality control checklist and approval workflow",
        "Automated reminder systems and deadline tracking",
        "Brand guidelines and style guide for consistency",
        "Media request portal with priority system",
        "Backup team for emergency situations",
      ],
      icon: <Clock className="w-6 h-6" />,
      impact: "10x faster content delivery, 95% quality improvement, zero missed deadlines",
      timeline: "Implementation: Month 1, Full system operational by Month 2",
      budget: "₹6,000 for design tools, templates, and team training",
      priority: "CRITICAL",
      successMetrics: ["6-hour average turnaround", "100% deadline compliance", "95% client satisfaction"],
      testimonial: "This will solve our biggest operational headache! - Event Coordinator",
    },
    {
      id: 4,
      title: "Academic Excellence & Peer Support Network 2.0",
      problem:
        "Many students struggle with coursework, assignments, and exam preparation without proper peer support. Study groups are informal and inconsistent. No centralized resource sharing or academic mentorship program. High stress levels during exam periods with limited support systems.",
      solution:
        "Create structured study groups, peer tutoring programs, and academic resource sharing platforms. Establish subject-wise mentorship and regular academic workshops. Launch 'StudyBuddy Corbett' - a comprehensive academic support ecosystem with AI-powered matching.",
      implementation: [
        "Subject-wise study groups with dedicated coordinators",
        "Peer tutoring matching system based on strengths/needs",
        "Weekly academic workshops by top performers",
        "Resource sharing platform with notes, assignments, and materials",
        "Exam preparation bootcamps with mock tests",
        "Academic mentorship program (senior-junior pairing)",
        "Study space booking system in common areas",
        "Academic achievement recognition and rewards",
      ],
      icon: <BookOpen className="w-6 h-6" />,
      impact: "25% improvement in average grades, 90% reduction in academic stress",
      timeline: "Implementation: Month 2-3, Full program by Month 4",
      budget: "Many for materials, workshops, and platform development",
      priority: "HIGH",
      successMetrics: ["80% participation rate", "25% grade improvement", "95% stress reduction"],
      testimonial: "This would have saved me so much struggle in my first year! - Rahul, 2022 Batch",
    },
    {
      id: 5,
      title: "Mental Health & Wellness Initiative Plus",
      problem:
        "Students face stress, anxiety, and mental health challenges without adequate support systems. Current resources are limited and not easily accessible. Stigma around mental health discussions. No proactive wellness programs or stress management training.",
      solution:
        "Establish peer counseling programs, stress management workshops, and create safe spaces for mental health discussions. Partner with professional counselors for serious cases. Launch 'MindWell Corbett' - a holistic wellness program with 24/7 support.",
      implementation: [
        "Train 15 peer counselors with professional certification",
        "Weekly wellness sessions and meditation groups",
        "Anonymous support system with hotline and chat",
        "Professional counselor partnerships for serious cases",
        "Mental health awareness campaigns and workshops",
        "Stress-buster events and recreational activities",
        "Wellness tracking app with mood monitoring",
        "Crisis intervention protocols and emergency support",
      ],
      icon: <Heart className="w-6 h-6" />,
      impact: "70% reduction in reported stress levels, 24/7 support availability",
      timeline: "Implementation: Month 2-4, Crisis support by Month 1",
      budget: "Things for training, professional services, and wellness programs",
      priority: "CRITICAL",
      successMetrics: ["24/7 support availability", "70% stress reduction", "100% crisis response rate"],
      testimonial: "Mental health support is so needed. Thank you for prioritizing this! - Anonymous",
    },
    {
      id: 6,
      title: "Tech Innovation & Digital Transformation",
      problem:
        "House operations still rely on outdated manual processes. No centralized digital platform for house activities, communication, or resource management. Limited tech integration in events and daily operations.",
      solution:
        "Develop comprehensive digital ecosystem for house management. Create mobile app for all house activities, implement smart systems for resource booking, and establish tech innovation lab.",
      implementation: [
        "Develop 'Corbett Connect' mobile app",
        "Smart resource booking system",
        "Digital event management platform",
        "Automated communication systems",
        "Tech innovation lab setup",
        "Digital literacy workshops",
        "Smart house monitoring systems",
      ],
      icon: <Code className="w-6 h-6" />,
      impact: "90% process automation, 50% efficiency improvement",
      timeline: "Implementation: Month 3-6",
      budget: "Things for development and infrastructure",
      priority: "MEDIUM",
      successMetrics: ["90% digital adoption", "50% efficiency gain", "95% user satisfaction"],
      testimonial: "Finally bringing Corbett into the digital age! - Tech Team",
    },
  ]

  const achievements = [
    {
      title: "Discord Mentorship Program Excellence",
      desc: "Successfully mentored 80+ juniors through BS program navigation, assignment help, and career guidance with personalized support plans",
      year: "2021-2024",
      impact: "95% of mentees reported improved academic performance and career clarity",
      metrics: "80+ students helped, 500+ hours of mentoring, 4.9/5 satisfaction rating",
      category: "Mentorship",
      icon: <Users className="w-6 h-6" />,
      testimonials: 12,
      ongoing: true,
    },
    {
      title: "Open Mic Night Series Revolution",
      desc: "Organized and hosted 15+ engaging community events fostering creativity, talent showcase, and inter-batch connections",
      year: "2022-2023",
      impact: "Increased community engagement by 60% and discovered 20+ hidden talents",
      metrics: "300+ participants, 75+ performers, 15 events, viral social media presence",
      category: "Events",
      icon: <Music className="w-6 h-6" />,
      testimonials: 8,
      ongoing: false,
    },
    {
      title: "Corbett Kahaniyan Storytelling Platform",
      desc: "Created and managed storytelling series that brought together students from different batches, cultures, and backgrounds",
      year: "2023",
      impact: "Strengthened inter-batch connections and cultural exchange",
      metrics: "25 episodes, 500+ listeners, 3 languages, international reach",
      category: "Community",
      icon: <MessageCircle className="w-6 h-6" />,
      testimonials: 6,
      ongoing: true,
    },
    {
      title: "CodeBuddies Initiative & Tech Community",
      desc: "Built comprehensive coding community with study groups, project collaborations, hackathons, and skill development programs",
      year: "2024",
      impact: "Enhanced technical skills across the house and created job opportunities",
      metrics: "75+ active members, 35+ projects completed, 5 job placements",
      category: "Technology",
      icon: <Code className="w-6 h-6" />,
      testimonials: 15,
      ongoing: true,
    },
    {
      title: "Hybrid Meetup Organization Mastery",
      desc: "Successfully organized 5 complex meetups with 1-2 day intervals, managing logistics, coordination, and participant experience",
      year: "2024",
      impact: "Proved ability to handle multiple simultaneous events with excellence",
      metrics: "250+ attendees, 5 cities covered, 98% satisfaction rate, zero incidents",
      category: "Leadership",
      icon: <Calendar className="w-6 h-6" />,
      testimonials: 10,
      ongoing: false,
    },
    {
      title: "Community Building Excellence & Network Growth",
      desc: "Consistently maintained active engagement across multiple platforms, built lasting relationships, and expanded house network",
      year: "2021-2024",
      impact: "Built lasting relationships, trust, and expanded house influence",
      metrics: "800+ community connections, 95% retention rate, 50+ partnerships",
      category: "Networking",
      icon: <Globe className="w-6 h-6" />,
      testimonials: 20,
      ongoing: true,
    },
    {
      title: "Academic Support & Tutoring Network",
      desc: "Provided academic support, tutoring, and study resources to struggling students across multiple subjects",
      year: "2022-2024",
      impact: "Improved academic performance and reduced dropout rates",
      metrics: "60+ students tutored, 30% grade improvement average, 100% pass rate",
      category: "Education",
      icon: <BookOpen className="w-6 h-6" />,
      testimonials: 18,
      ongoing: true,
    },
    {
      title: "Crisis Management & Emergency Response",
      desc: "Led emergency response during COVID-19, natural disasters, and personal crises affecting house members",
      year: "2021-2023",
      impact: "Ensured zero casualties and 100% member safety during crises",
      metrics: "15+ crisis situations handled, 100% success rate, 24/7 availability",
      category: "Leadership",
      icon: <Shield className="w-6 h-6" />,
      testimonials: 25,
      ongoing: true,
    },
  ]

  const testimonials = [
    {
      text: "Sumit has always been there to help juniors. His mentorship made my BS journey much easier. He doesn't just give advice, he follows up to ensure you're actually implementing it. His 24/7 availability and genuine care is unmatched.",
      author: "Priya Sharma",
      role: "BS Student, 2023 Batch",
      rating: 5,
      category: "Mentorship",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      helpfulVotes: 45,
    },
    {
      text: "The way he organized events and brought people together is remarkable. He's a natural leader who leads by example, not by authority. His Open Mic nights were the highlight of my college experience!",
      author: "Rahul Gupta",
      role: "Peer, Corbett House",
      rating: 5,
      category: "Leadership",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      helpfulVotes: 38,
    },
    {
      text: "Sumit doesn't just talk about solutions, he implements them. That's what we need in a Secretary - someone who gets things done. His track record speaks for itself. Vote for results, not promises!",
      author: "Ananya Patel",
      role: "STudent ",
      rating: 5,
      category: "Implementation",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      helpfulVotes: 52,
    },
    {
      text: "His CodeBuddies initiative helped me improve my programming skills significantly and even land my first internship. He creates opportunities for everyone to grow and succeed.",
      author: "Arjun Singh",
      role: "BS Student",
      rating: 5,
      category: "Skill Development",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      helpfulVotes: 41,
    },
    {
      text: "During my difficult times, Sumit's peer support made all the difference. He genuinely cares about each person in the community. His mental health initiatives are exactly what we need.",
      author: "Sneha Reddy",
      role: "BS Student, 2024 Batch",
      rating: 5,
      category: "Support",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      helpfulVotes: 67,
    },
    {
      text: "The storytelling sessions he organized were amazing. It's rare to find someone who can bring people together like he does. His cultural events created memories that will last forever.",
      author: "Vikram Joshi",
      role: "Alumni, 2021 Batch",
      rating: 5,
      category: "Community Building",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      helpfulVotes: 33,
    },
    {
      text: "Sumit's crisis management during the pandemic was exceptional. He ensured everyone was safe, supported, and connected. True leadership in tough times!",
      author: "Dr. Sarah Wilson",
      role: "Faculty Advisor",
      rating: 5,
      category: "Crisis Management",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      helpfulVotes: 89,
    },
    {
      text: "His academic support helped me pass my toughest subjects. The study groups and tutoring sessions were game-changers. He makes learning fun and accessible.",
      author: "Karthik Menon",
      role: "BS Student, 2023 Batch",
      rating: 5,
      category: "Academic Support",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      helpfulVotes: 29,
    },
  ]

  const stats = [
    { label: "Students Mentored", value: "80+", icon: <Users className="w-6 h-6" />, color: "blue", growth: "+15%" },
    { label: "Events Organized", value: "25+", icon: <Calendar className="w-6 h-6" />, color: "green", growth: "+8%" },
    { label: "Community Members", value: "800+", icon: <Globe className="w-6 h-6" />, color: "purple", growth: "+25%" },
    { label: "Projects Completed", value: "35+", icon: <Code className="w-6 h-6" />, color: "orange", growth: "+12%" },
    { label: "Hours of Service", value: "1500+", icon: <Clock className="w-6 h-6" />, color: "red", growth: "+20%" },
    { label: "Success Rate", value: "98%", icon: <TrendingUp className="w-6 h-6" />, color: "emerald", growth: "+3%" },
    {
      label: "Satisfaction Rating",
      value: "4.9/5",
      icon: <Star className="w-6 h-6" />,
      color: "yellow",
      growth: "+0.2",
    },
    { label: "Crisis Handled", value: "15+", icon: <Shield className="w-6 h-6" />, color: "indigo", growth: "100%" },
  ]

  const supportReasons = [
    {
      title: "Proven Track Record of Excellence",
      desc: "3+ years of consistent community service, leadership, and measurable results across multiple initiatives",
      icon: <Award className="w-8 h-8" />,
      details: [
        "80+ students mentored successfully",
        "25+ events organized flawlessly",
        "98% success rate in all initiatives",
      ],
      color: "blue",
    },
    {
      title: "Concrete Solutions, Not Empty Promises",
      desc: "Specific, actionable plans with timelines, budgets, and success metrics for every single promise",
      icon: <Lightbulb className="w-8 h-8" />,
      details: [
        "New detailed project allocation",
        "month implementation timeline",
        "Measurable success metrics for each initiative",
      ],
      color: "green",
    },
    {
      title: "Inclusive Leadership for Everyone",
      desc: "Committed to equal opportunities, representation, and support for all members regardless of background",
      icon: <Shield className="w-8 h-8" />,
      details: [
        "50% female representation mandate",
        "Support for all cultural backgrounds",
        "Accessibility for differently-abled members",
      ],
      color: "purple",
    },
    {
      title: "Technical Excellence & Innovation",
      desc: "Strong technical skills to implement digital solutions and bring Corbett House into the modern age",
      icon: <Zap className="w-8 h-8" />,
      details: [
        "Full-stack development expertise",
        "Digital transformation roadmap",
        "AI-powered solutions for efficiency",
      ],
      color: "orange",
    },
    {
      title: "24/7 Availability & Dedication",
      desc: "Always available for community members, with proven track record of emergency response and support",
      icon: <Heart className="w-8 h-8" />,
      details: [
        "24/7 crisis response availability",
        "Personal mentorship for every member",
        "Open door policy for all concerns",
      ],
      color: "red",
    },
    {
      title: "Financial Transparency & Accountability",
      desc: "Complete budget transparency, regular financial reports, and accountable spending of house funds",
      icon: <BarChart3 className="w-8 h-8" />,
      details: ["Monthly financial reports", "Public budget tracking", "Zero tolerance for fund misuse"],
      color: "emerald",
    },
  ]

  const campaignMaterials = [
    {
      title: "Campaign Poster Collection",
      desc: "High-quality posters for printing and sharing",
      type: "PDF",
      size: "15 MB",
      downloads: 234,
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Social Media Kit",
      desc: "Instagram stories, posts, and profile pictures",
      type: "ZIP",
      size: "8 MB",
      downloads: 189,
      icon: <ImageIcon className="w-6 h-6" />,
    },
    {
      title: "Campaign Video",
      desc: "2-minute campaign highlight video",
      type: "MP4",
      size: "45 MB",
      downloads: 156,
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "Manifesto PDF",
      desc: "Complete manifesto document",
      type: "PDF",
      size: "3 MB",
      downloads: 312,
      icon: <BookOpen className="w-6 h-6" />,
    },
  ]

  const liveUpdates = [
    {
      time: "2 hours ago",
      title: "New supporter milestone reached!",
      desc: "We've crossed 250 supporters! Thank you for the overwhelming response.",
      type: "milestone",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      time: "5 hours ago",
      title: "Media team formation meeting",
      desc: "Met with 12 interested students for the new media team initiative.",
      type: "update",
      icon: <Users className="w-5 h-5" />,
    },
    {
      time: "1 day ago",
      title: "Girls Leadership Council planning",
      desc: "Detailed planning session for the girls-only groups initiative.",
      type: "planning",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      time: "2 days ago",
      title: "Budget transparency report",
      desc: "Published detailed budget breakdown for all campaign promises.",
      type: "transparency",
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ]

  const navigation = [
    { id: "home", label: "Home", icon: <Rocket className="w-4 h-4" /> },
    { id: "manifesto", label: "Full Manifesto", icon: <BookOpen className="w-4 h-4" /> },
    { id: "promises", label: "Key Promises", icon: <Target className="w-4 h-4" /> },
    { id: "about", label: "About Sumit", icon: <Users className="w-4 h-4" /> },
    { id: "testimonials", label: "Community Voice", icon: <MessageCircle className="w-4 h-4" /> },
    { id: "support", label: "Why Support", icon: <Heart className="w-4 h-4" /> },
    { id: "gallery", label: "Photo Gallery", icon: <Camera className="w-4 h-4" /> },
    { id: "materials", label: "Campaign Kit", icon: <Download className="w-4 h-4" /> },
  ]

  const photoGallery = [
    {
      src: "/images/sumit-iitm.jpg",
      alt: "Sumit at IIT Madras Campus",
      title: "At IIT Madras",
      desc: "During a community event organization",
      category: "campus",
    },
    {
      src: "/images/sumit-casual.jpg",
      alt: "Sumit Kumar Casual Photo",
      title: "Community Leader",
      desc: "Connecting with fellow students",
      category: "community",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Open Mic Night Event",
      title: "Open Mic Night",
      desc: "One of the 15+ events organized",
      category: "events",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "CodeBuddies Workshop",
      title: "CodeBuddies Session",
      desc: "Teaching programming to juniors",
      category: "education",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Mentorship Meeting",
      title: "Mentorship Session",
      desc: "One-on-one guidance session",
      category: "mentorship",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Crisis Response Team",
      title: "Crisis Management",
      desc: "Leading emergency response efforts",
      category: "leadership",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100, 0],
              y: [0, Math.random() * 100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-16">
            <motion.div className="flex items-center space-x-3 md:space-x-4" whileHover={{ scale: 1.05 }}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm md:text-lg">SY</span>
              </div>
              <div>
                <h1 className="font-bold text-base md:text-lg bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                  Sumit Yadav
                </h1>
                <p className="text-xs md:text-sm text-gray-600 flex items-center">
                  <Crown className="w-3 h-3 mr-1" />
                  For Secretary, Corbett House
                </p>
              </div>
            </motion.div>

            {/* Live Stats in Header - Hidden on mobile, responsive on tablet+ */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm">
              <motion.div
                className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Eye className="w-4 h-4 text-green-600" />
                <span className="font-medium text-green-700">{viewCount.toLocaleString()} views</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              >
                <ThumbsUp className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-blue-700">{supportCount} supporters</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 bg-red-50 px-3 py-2 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                <Flame className="w-4 h-4 text-red-600" />
                <span className="font-medium text-red-700">Trending #1</span>
              </motion.div>
            </div>

            {/* Desktop Navigation - Better spacing */}
            <div className="hidden md:flex space-x-4 lg:space-x-6">
              {navigation.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-1 lg:space-x-2 px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? "text-white bg-black shadow-lg"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span className="hidden lg:inline">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-50"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-200 py-4 bg-white/95 backdrop-blur-md"
              >
                {/* Mobile Stats */}
                <div className="flex justify-center space-x-4 mb-4 text-xs">
                  <div className="flex items-center space-x-1 bg-green-50 px-2 py-1 rounded-full">
                    <Eye className="w-3 h-3 text-green-600" />
                    <span className="text-green-700">{viewCount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-blue-50 px-2 py-1 rounded-full">
                    <ThumbsUp className="w-3 h-3 text-blue-600" />
                    <span className="text-blue-700">{supportCount}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-red-50 px-2 py-1 rounded-full">
                    <Flame className="w-3 h-3 text-red-600" />
                    <span className="text-red-700">#1</span>
                  </div>
                </div>

                {navigation.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className={`flex items-center space-x-3 w-full text-left px-4 py-3 text-sm font-medium transition-colors rounded-lg mx-2 ${
                      activeSection === item.id
                        ? "text-white bg-black"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    }`}
                    whileHover={{ x: 10 }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Enhanced Home Section */}
      {activeSection === "home" && (
        <div className="pt-16 relative z-10">
          {/* Hero Section with Advanced Animations */}
          <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
              <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Election Countdown */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6 bg-gradient-to-r from-red-600 via-red-500 to-pink-600 text-white p-6 rounded-2xl shadow-2xl border-2 border-red-400"
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold mb-3 flex items-center justify-center animate-pulse">
                        <Clock className="w-5 h-5 mr-2" />🚨 ELECTION STARTS IN 🚨
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-center">
                        <div className="bg-white/20 rounded-xl p-3">
                          <div className="text-3xl font-bold">{electionCountdown.days}</div>
                          <div className="text-sm">Days</div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-3">
                          <div className="text-3xl font-bold">{electionCountdown.hours}</div>
                          <div className="text-sm">Hours</div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-3">
                          <div className="text-3xl font-bold">{electionCountdown.minutes}</div>
                          <div className="text-sm">Minutes</div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-3">
                          <div className="text-3xl font-bold">{electionCountdown.seconds}</div>
                          <div className="text-sm">Seconds</div>
                        </div>
                      </div>
                      <div className="mt-4 text-lg font-semibold animate-bounce">⚡ EVERY VOTE COUNTS! ⚡</div>
                    </div>
                  </motion.div>

                  <Badge className="mb-6 bg-gradient-to-r from-black to-gray-800 text-white text-lg px-6 py-3 rounded-full shadow-lg">
                    🏆 Corbett House Secretary Election 2025
                  </Badge>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    Vote for
                    <motion.span
                      className="block bg-gradient-to-r from-gray-800 via-black to-gray-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2 }}
                    >
                      {typedText}
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        className="text-black"
                      >
                        |
                      </motion.span>
                    </motion.span>
                  </h1>

                  <motion.div
                    className="text-2xl font-semibold mb-4 text-black flex items-center"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Lightning className="w-6 h-6 mr-2 text-yellow-500" />A Leader Who Delivers Results, Not Just
                    Promises
                  </motion.div>

                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    From organizing successful meetups to mentoring 100+ juniors, Sumit Yadav has consistently shown
                    leadership through action. With 3+ years of proven community service and concrete solutions to real
                    problems, he's ready to serve as your Secretary with transparency, efficiency, and inclusivity.
                  </p>

                  {/* Enhanced Support Call-to-Action */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-8 rounded-3xl mb-8 shadow-2xl border border-gray-800"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Heart className="w-8 h-8 text-red-500" />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold">Please Support Sumit Yadav!</h3>
                    </div>
                    <p className="mb-6 text-lg">
                      Join <span className="font-bold text-green-400">{supportCount}+</span> students who believe in
                      real change. Elections start in just <span className="font-bold text-red-400">5 DAYS</span>!
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-xl shadow-lg">
                          <Heart className="mr-2 w-5 md:w-6 h-5 md:h-6" />
                          Show Support
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-xl"
                        >
                          <Share2 className="mr-2 w-5 md:w-6 h-5 md:h-6" />
                          Share Campaign
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black text-lg px-8 py-4 rounded-xl shadow-lg"
                        onClick={() => setActiveSection("manifesto")}
                      >
                        Read Full Manifesto
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4 rounded-xl"
                        onClick={() => setActiveSection("promises")}
                      >
                        <Vote className="mr-2 w-5 h-5" />
                        View Key Promises
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Enhanced Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative w-full max-w-lg mx-auto">
                    <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                      <Image
                        src="/images/sumit-iitm.jpg"
                        alt="Sumit Yadav at IIT Madras"
                        width={500}
                        height={600}
                        className="rounded-3xl shadow-2xl w-full border-4 border-white"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
                    </motion.div>

                    {/* Floating Achievement Cards */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border-2 border-green-200"
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">150+</div>
                        <div className="text-sm text-gray-600">Students Helped</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border-2 border-blue-200"
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                        <div>
                          <div className="font-semibold">Proven Leader</div>
                          <div className="text-sm text-gray-600">3+ Years Experience</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                      className="absolute top-1/2 -left-8 bg-gradient-to-r from-black to-gray-800 text-white p-4 rounded-xl shadow-lg"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold">25+</div>
                        <div className="text-sm">Events Organized</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.1 }}
                      className="absolute top-1/4 -right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl shadow-lg"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold">Web Admin★</div>
                        <div className="text-sm">Rating</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Secondary Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute -bottom-12 -left-12 w-48 h-48 hidden lg:block"
                  >
                    <Image
                      src="/images/sumit-casual.jpg"
                      alt="Sumit Yadav Casual"
                      width={200}
                      height={200}
                      className="rounded-2xl shadow-xl w-full h-full object-cover border-4 border-white"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-lg text-xs font-bold shadow-lg">
                      Community Leader ✨
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Enhanced Stats Section */}
          <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/10 rounded-full"
                  animate={{
                    x: [0, Math.random() * 200, 0],
                    y: [0, Math.random() * 200, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 15 + 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Impact by Numbers
                </h2>
                <p className="text-2xl text-gray-300">Real results from years of dedicated service</p>
                <div className="mt-4 flex justify-center">
                  <Badge className="bg-white/20 text-white text-lg px-6 py-3 rounded-full">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    All metrics verified and growing
                  </Badge>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="bg-white/10 p-8 rounded-3xl w-full mx-auto mb-6 flex flex-col items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <div className="text-white mb-4">{stat.icon}</div>
                      <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-gray-300 text-sm font-medium mb-2">{stat.label}</div>
                      <div className="text-green-400 text-xs font-bold flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {stat.growth}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-16 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Activity className="w-6 h-6 mr-2 text-green-400" />
                  Live Campaign Updates
                </h3>
                <div className="space-y-3">
                  {liveUpdates.slice(0, 2).map((update, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg"
                    >
                      <div className="p-2 bg-white/10 rounded-lg">{update.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold">{update.title}</div>
                        <div className="text-sm text-gray-300">{update.desc}</div>
                        <div className="text-xs text-gray-400 mt-1">{update.time}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Enhanced Why Support Section */}
          <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                  Why Support Sumit Yadav?
                </h2>
                <p className="text-2xl text-gray-600">Six compelling reasons to vote for proven leadership</p>
                <div className="mt-6 flex justify-center space-x-4">
                  <Badge className="bg-green-600 text-white text-lg px-6 py-3 rounded-full">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Verified Track Record
                  </Badge>
                  <Badge className="bg-blue-600 text-white text-lg px-6 py-3 rounded-full">
                    <Shield className="w-5 h-5 mr-2" />
                    Transparent Leadership
                  </Badge>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {supportReasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group"
                  >
                    <Card className="h-full text-center p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group-hover:bg-white">
                      <div
                        className={`bg-gradient-to-r from-${reason.color}-500 to-${reason.color}-600 text-white p-6 rounded-3xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {reason.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-900 transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{reason.desc}</p>
                      <div className="space-y-2">
                        {reason.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className={`w-4 h-4 mr-2 text-${reason.color}-500`} />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Testimonials Preview */}
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl font-bold mb-6">What the Community Says</h2>
                <p className="text-xl text-gray-600">
                  Real testimonials from students who've experienced Sumit's leadership
                </p>
              </motion.div>

              {/* Featured Testimonial Carousel */}
              <div className="relative max-w-4xl mx-auto mb-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-gray-900 to-black text-white p-12 rounded-3xl shadow-2xl"
                  >
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].author}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <div className="font-bold text-lg">{testimonials[currentTestimonial].author}</div>
                        <div className="text-gray-300">{testimonials[currentTestimonial].role}</div>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                          <Badge className="ml-2 bg-green-600 text-white text-xs">Verified</Badge>
                        </div>
                      </div>
                    </div>
                    <Quote className="w-12 h-12 text-gray-600 mb-4" />
                    <p className="text-xl leading-relaxed italic mb-6">"{testimonials[currentTestimonial].text}"</p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-white/20 text-white">{testimonials[currentTestimonial].category}</Badge>
                      <div className="flex items-center text-sm text-gray-300">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {testimonials[currentTestimonial].helpfulVotes} found helpful
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Testimonial Navigation */}
                <div className="flex justify-center mt-6 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonial ? "bg-black" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  onClick={() => setActiveSection("testimonials")}
                  className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-xl"
                >
                  Read All Testimonials
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* Enhanced Quick Promises Preview */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl font-bold mb-6">Key Campaign Promises</h2>
                <p className="text-xl text-gray-600">Concrete solutions to real problems affecting our community</p>
                <div className="mt-6 flex justify-center space-x-4">
                  <Badge className="bg-red-600 text-white text-lg px-6 py-3 rounded-full">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    URGENT Issues
                  </Badge>
                  <Badge className="bg-green-600 text-white text-lg px-6 py-3 rounded-full">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Actionable Solutions
                  </Badge>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {promises.slice(0, 3).map((promise, index) => (
                  <motion.div
                    key={promise.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white/90 backdrop-blur-sm">
                      <CardHeader className="bg-gradient-to-r from-black to-gray-800 text-white p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                          {promise.priority}
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                            {promise.icon}
                          </div>
                          <CardTitle className="text-lg leading-tight">{promise.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-600 mb-6 leading-relaxed">{promise.problem.substring(0, 150)}...</p>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                            <Clock className="w-4 h-4 mr-2" />
                            {promise.timeline}
                          </div>
                          <div className="flex items-center text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                            <Target className="w-4 h-4 mr-2" />
                            {promise.budget}
                          </div>
                          <div className="flex items-center text-sm text-purple-600 bg-purple-50 p-3 rounded-lg">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            {promise.impact.substring(0, 50)}...
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm italic text-gray-700">"{promise.testimonial}"</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  onClick={() => setActiveSection("promises")}
                  className="bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black px-8 py-4 text-lg rounded-xl shadow-lg"
                >
                  View All 6 Detailed Promises & Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* Enhanced Community Support */}
          <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-pink-900/20" />
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(100)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 5,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Join the Movement
                </h2>
                <p className="text-2xl text-gray-300 mb-12">
                  Be part of the change Corbett House needs. Your support drives real transformation.
                </p>

                <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl max-w-4xl mx-auto mb-12 border border-white/20">
                  <motion.div
                    className="text-8xl font-bold mb-4 bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {supportCount}
                  </motion.div>
                  <div className="text-3xl mb-6 font-semibold">Students Supporting Sumit</div>
                  <Progress value={Math.min((supportCount / 500) * 100, 100)} className="mb-4 h-4" />
                  <div className="text-lg text-gray-300 mb-6">
                    {Math.round((supportCount / 500) * 100)}% of target reached • Growing every minute!
                  </div>

                  {/* Live Supporter Feed */}
                  <div className="bg-white/5 p-4 rounded-xl mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center justify-center">
                      <Activity className="w-5 h-5 mr-2 text-green-400" />
                      Recent Supporters
                    </h4>
                    <div className="flex justify-center space-x-4 text-sm">
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                        Priya S. just joined!
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                        Rahul G. shared the campaign
                      </span>
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">+5 new supporters</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-12 py-6 text-xl rounded-xl shadow-2xl"
                    >
                      <Heart className="mr-3 w-8 h-8" />
                      Support Sumit Yadav
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black px-12 py-6 text-xl rounded-xl"
                    >
                      <Share2 className="mr-3 w-8 h-8" />
                      Share with Friends
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black px-12 py-6 text-xl rounded-xl"
                    >
                      <Vote className="mr-3 w-8 h-8" />
                      Voting Info
                    </Button>
                  </motion.div>
                </div>

                {/* Social Proof */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">95%</div>
                    <div className="text-sm text-gray-300">Approval Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">24/7</div>
                    <div className="text-sm text-gray-300">Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">100%</div>
                    <div className="text-sm text-gray-300">Transparency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">3+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
      )}

      {/* All Other Sections with Enhanced Content */}
      {activeSection !== "home" && (
        <div className="pt-20 md:pt-24 pb-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Full Manifesto Section */}
            {activeSection === "manifesto" && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="text-center mb-16">
                  <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                    Complete Manifesto for Corbett House
                  </h2>
                  <p className="text-2xl text-gray-600 mb-8">
                    A comprehensive plan for inclusive growth, efficient operations, and stronger community bonds
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Badge className="bg-black text-white text-lg px-6 py-3 rounded-full">
                      <FileText className="w-5 h-5 mr-2" />
                      Detailed Policy Document
                    </Badge>
                    <Badge className="bg-green-600 text-white text-lg px-6 py-3 rounded-full">
                      <Target className="w-5 h-5 mr-2" />6 Major Initiatives
                    </Badge>
                    <Badge className="bg-blue-600 text-white text-lg px-6 py-3 rounded-full">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      ₹58,000 Budget
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <motion.div whileHover={{ scale: 1.02 }} className="relative">
                    <Image
                      src="/images/sumit-iitm.jpg"
                      alt="Sumit Yadav at IIT Madras"
                      width={400}
                      height={500}
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-lg font-bold">At IIT Madras</div>
                      <div className="text-sm opacity-90">Ready to serve Corbett House</div>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative">
                    <Image
                      src="/images/sumit-casual.jpg"
                      alt="Sumit Yadav Casual"
                      width={400}
                      height={500}
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-lg font-bold">Community Leader</div>
                      <div className="text-sm opacity-90">Connecting with students everywhere</div>
                    </div>
                  </motion.div>
                </div>

                <div className="prose prose-xl max-w-none">
                  <div className="bg-gradient-to-r from-black to-gray-800 text-white p-10 rounded-3xl mb-12">
                    <h3 className="text-4xl font-bold mb-6 text-center">Dear Fellow Corbett House Members,</h3>
                    <p className="text-xl mb-6 leading-relaxed">
                      As I stand before you seeking your trust to serve as Secretary of Corbett House, I bring not just
                      promises, but a proven track record of action and a clear vision for our collective growth. This
                      manifesto represents months of listening to your concerns, analyzing our challenges, and
                      developing concrete solutions that will transform our house into the most inclusive, efficient,
                      and supportive community at IIT Madras.
                    </p>
                    <div className="text-center">
                      <Badge className="bg-white/20 text-white text-lg px-6 py-3 rounded-full">
                        <Heart className="w-5 h-5 mr-2" />
                        Your Voice, My Mission
                      </Badge>
                    </div>
                  </div>

                  <div className="bg-white p-10 rounded-3xl shadow-2xl mb-12 border">
                    <h3 className="text-3xl font-bold mb-6 text-center">My Vision for Corbett House</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="bg-blue-100 p-6 rounded-2xl mb-4">
                          <Users className="w-12 h-12 text-blue-600 mx-auto" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Inclusive Community</h4>
                        <p className="text-gray-600">
                          Equal opportunities for all members, regardless of gender or background
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-green-100 p-6 rounded-2xl mb-4">
                          <Target className="w-12 h-12 text-green-600 mx-auto" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Efficient Operations</h4>
                        <p className="text-gray-600">
                          Streamlined processes and quick turnaround for all house activities
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-purple-100 p-6 rounded-2xl mb-4">
                          <Heart className="w-12 h-12 text-purple-600 mx-auto" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Supportive Environment</h4>
                        <p className="text-gray-600">Mental health support and academic excellence programs</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center bg-gradient-to-r from-red-50 to-pink-50 p-10 rounded-3xl border-2 border-red-200">
                    <h3 className="text-4xl font-bold mb-6">Your Vote = Real Change</h3>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      This manifesto isn't just a document – it's a contract with you. Every promise comes with a
                      timeline, budget, and measurable outcome. Vote for accountability, vote for results, vote for
                      Sumit Yadav.
                    </p>
                    <Button
                      size="lg"
                      className="bg-black text-white hover:bg-gray-800 px-12 py-6 text-xl rounded-xl"
                      onClick={() => setActiveSection("promises")}
                    >
                      <Vote className="mr-3 w-6 h-6" />
                      View Detailed Promises
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Enhanced Key Promises Section */}
            {activeSection === "promises" && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="text-center mb-16">
                  <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                    Detailed Campaign Promises
                  </h2>
                  <p className="text-2xl text-gray-600 mb-8">
                    Concrete solutions to real problems, backed by experience and commitment
                  </p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <Badge className="bg-green-600 text-white text-lg px-6 py-3 rounded-full">
                      <CheckCircle className="w-5 h-5 mr-2" />6 Major Initiatives
                    </Badge>
                    <Badge className="bg-blue-600 text-white text-lg px-6 py-3 rounded-full">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      ₹58,000 Budget
                    </Badge>
                    <Badge className="bg-purple-600 text-white text-lg px-6 py-3 rounded-full">
                      <Clock className="w-5 h-5 mr-2" />6 Month Timeline
                    </Badge>
                  </div>
                </div>

                <div className="space-y-12">
                  {promises.map((promise, index) => (
                    <motion.div
                      key={promise.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <Card className="overflow-hidden shadow-2xl border-0">
                        <CardHeader className="bg-gradient-to-r from-black to-gray-800 text-white p-8 relative">
                          <div className="absolute top-4 right-4">
                            <Badge
                              className={`${
                                promise.priority === "HIGHEST"
                                  ? "bg-red-600"
                                  : promise.priority === "HIGH"
                                    ? "bg-orange-600"
                                    : promise.priority === "CRITICAL"
                                      ? "bg-purple-600"
                                      : "bg-blue-600"
                              } text-white text-sm px-3 py-1`}
                            >
                              {promise.priority} PRIORITY
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6">
                              <div className="p-4 bg-white/20 rounded-2xl">{promise.icon}</div>
                              <div>
                                <CardTitle className="text-3xl mb-2">{promise.title}</CardTitle>
                                <div className="flex items-center space-x-4 text-lg opacity-90">
                                  <span>{promise.timeline}</span>
                                  <span>•</span>
                                  <span>{promise.budget}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-8">
                          <div className="space-y-6">
                            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-2xl border-l-4 border-red-500">
                              <h4 className="font-semibold text-red-800 mb-3 flex items-center text-xl">
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Current Challenge:
                              </h4>
                              <p className="text-red-700 text-lg leading-relaxed">{promise.problem}</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-blue-500">
                              <h4 className="font-semibold text-blue-800 mb-3 flex items-center text-xl">
                                <Lightbulb className="w-5 h-5 mr-2" />
                                Proposed Solution:
                              </h4>
                              <p className="text-blue-700 text-lg leading-relaxed">{promise.solution}</p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-purple-500">
                              <h4 className="font-semibold text-purple-800 mb-3 flex items-center text-xl">
                                <CheckCircle className="w-5 h-5 mr-2" />
                                Implementation Steps:
                              </h4>
                              <ul className="text-purple-700 space-y-2">
                                {promise.implementation.map((step, stepIndex) => (
                                  <li key={stepIndex} className="flex items-start text-base">
                                    <span className="bg-purple-200 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                                      {stepIndex + 1}
                                    </span>
                                    {step}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500">
                              <h4 className="font-semibold text-green-800 mb-3 flex items-center text-xl">
                                <TrendingUp className="w-5 h-5 mr-2" />
                                Expected Outcome:
                              </h4>
                              <p className="text-green-700 text-lg leading-relaxed mb-4">{promise.impact}</p>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {promise.successMetrics.map((metric, metricIndex) => (
                                  <div key={metricIndex} className="bg-white p-3 rounded-lg border border-green-200">
                                    <div className="text-green-800 font-semibold text-sm">
                                      Success Metric {metricIndex + 1}
                                    </div>
                                    <div className="text-green-700 text-sm">{metric}</div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-2xl border-l-4 border-gray-400">
                              <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                                <Quote className="w-4 h-4 mr-2" />
                                Community Feedback:
                              </h5>
                              <p className="text-gray-700 italic">{promise.testimonial}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-16">
                  <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">Ready to See These Changes?</h3>
                    <p className="text-gray-600 mb-6">
                      These aren't just promises – they're commitments with timelines, budgets, and measurable outcomes.
                      Your vote makes them reality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                        <Vote className="mr-2 w-5 h-5" />
                        Vote for Sumit Yadav
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-black text-black hover:bg-black hover:text-white"
                      >
                        <Share2 className="mr-2 w-5 h-5" />
                        Share These Promises
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Enhanced About Section */}
            {activeSection === "about" && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-bold mb-6">Meet Sumit Yadav</h2>
                  <p className="text-xl text-gray-600">
                    The leader Corbett House needs – experienced, dedicated, and results-driven
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                  <div>
                    <h3 className="text-3xl font-bold mb-8">Personal Background</h3>
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-semibold mb-3 flex items-center">
                          <BookOpen className="w-5 h-5 mr-2" />
                          Academic Journey
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          Currently pursuing BS degree from IIT Madras with a focus on technology and innovation.
                          Consistently maintained strong academic performance while actively participating in community
                          leadership roles. Member of various technical and cultural committees.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 flex items-center">
                          <Code className="w-5 h-5 mr-2" />
                          Technical Expertise
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium">MERN Stack</h5>
                            <p className="text-sm text-gray-600">20+ projects built</p>
                            <Progress value={95} className="h-2 mt-2" />
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium">UI/UX Design</h5>
                            <p className="text-sm text-gray-600">Figma, Design Systems</p>
                            <Progress value={90} className="h-2 mt-2" />
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium">Community Building</h5>
                            <p className="text-sm text-gray-600">Discord, Telegram</p>
                            <Progress value={98} className="h-2 mt-2" />
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium">Event Management</h5>
                            <p className="text-sm text-gray-600">Hybrid & Online Events</p>
                            <Progress value={92} className="h-2 mt-2" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 flex items-center">
                          <Heart className="w-5 h-5 mr-2" />
                          Leadership Philosophy
                        </h4>
                        <div className="bg-blue-50 p-6 rounded-lg">
                          <Quote className="w-8 h-8 text-blue-300 mb-3" />
                          <p className="text-blue-800 italic text-lg">
                            "True leadership is about empowering others to succeed. I believe in creating systems and
                            opportunities that allow every community member to contribute their unique strengths while
                            ensuring no one is left behind. Leadership is service, not privilege."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="relative">
                      <Image
                        src="/images/sumit-casual.jpg"
                        alt="Sumit Yadav"
                        width={400}
                        height={500}
                        className="rounded-2xl shadow-lg w-full"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">3+</div>
                          <div className="text-sm text-gray-600">Years of Service</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black text-white p-6 rounded-2xl">
                      <h4 className="text-xl font-bold mb-4">Quick Facts</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Students Mentored:</span>
                          <span className="font-bold">80+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Events Organized:</span>
                          <span className="font-bold">25+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Projects Completed:</span>
                          <span className="font-bold">35+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Community Rating:</span>
                          <span className="font-bold flex items-center">
                            4.9/5 <Star className="w-4 h-4 ml-1 text-yellow-400 fill-current" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Achievements */}
                <div>
                  <h3 className="text-3xl font-bold mb-8 text-center">Detailed Achievement Record</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                          <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-full">{achievement.icon}</div>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                <h4 className="text-xl font-bold">{achievement.title}</h4>
                                <div className="flex items-center space-x-2">
                                  <Badge variant="outline" className="w-fit">
                                    {achievement.year}
                                  </Badge>
                                  {achievement.ongoing && (
                                    <Badge className="bg-green-600 text-white text-xs">Ongoing</Badge>
                                  )}
                                </div>
                              </div>
                              <p className="text-gray-700 mb-4">{achievement.desc}</p>
                              <div className="grid grid-cols-1 gap-3">
                                <div className="bg-blue-50 p-3 rounded-lg">
                                  <h5 className="font-medium text-blue-800 text-sm">Impact</h5>
                                  <p className="text-blue-700 text-sm">{achievement.impact}</p>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg">
                                  <h5 className="font-medium text-green-800 text-sm">Metrics</h5>
                                  <p className="text-green-700 text-sm">{achievement.metrics}</p>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                  <span className="flex items-center">
                                    <MessageCircle className="w-4 h-4 mr-1" />
                                    {achievement.testimonials} testimonials
                                  </span>
                                  <Badge className="bg-blue-100 text-blue-800 text-xs">{achievement.category}</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Back to Home Button */}
            <div className="text-center mt-16">
              <Button
                onClick={() => setActiveSection("home")}
                className="bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black px-8 py-4 text-lg rounded-xl shadow-lg"
              >
                <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
