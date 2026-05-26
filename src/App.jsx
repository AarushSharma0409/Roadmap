import { useState, useEffect } from "react";

const roadmap = [
  {
    month: "Month 1",
    theme: "AI & ML Foundations + DocMind",
    color: "#0F4C81",
    accent: "#4A90D9",
    accentGlow: "rgba(74, 144, 217, 0.15)",
    weeks: [
      {
        week: "Week 1",
        title: "Python for AI & Core ML Concepts",
        daily: "2–3 hrs/day",
        tasks: [
          "Revise Python: NumPy, Pandas, Matplotlib",
          "Learn ML fundamentals: supervised/unsupervised, loss, optimization",
          "Complete fast.ai Lesson 1 or Andrew Ng ML Specialization (Week 1–2)",
          "Build: linear regression & classification from scratch",
        ],
        resources: ["fast.ai", "Kaggle Learn: Python & ML", "3Blue1Brown Neural Networks playlist"],
      },
      {
        week: "Week 2",
        title: "Deep Learning & Neural Networks",
        daily: "2–3 hrs/day",
        tasks: [
          "Learn CNNs, RNNs, Transformers (theory)",
          "Train a simple image classifier with TensorFlow/Keras",
          "Read: 'Attention Is All You Need' (summary version)",
          "Understand embeddings, tokenization, vector spaces",
        ],
        resources: ["Andrej Karpathy's Neural Nets Zero to Hero", "TensorFlow tutorials", "Jay Alammar's blog on Transformers"],
      },
      {
        week: "Week 3",
        title: "LLMs & Prompt Engineering",
        daily: "2–3 hrs/day",
        tasks: [
          "Learn how LLMs work: GPT architecture, RLHF, instruction tuning",
          "OpenAI API: completions, chat, embeddings endpoints",
          "Master prompt engineering: zero-shot, few-shot, chain-of-thought",
          "Build: a simple Q&A bot using OpenAI API",
        ],
        resources: ["OpenAI Cookbook", "DeepLearning.AI: ChatGPT Prompt Engineering (free)", "Hugging Face NLP course Ch. 1–3"],
      },
      {
        week: "Week 4",
        title: "RAG Pipelines → Build DocMind",
        daily: "3–4 hrs/day",
        tasks: [
          "Learn RAG: chunking, embedding, vector search, retrieval + generation",
          "Set up ChromaDB, embed documents with OpenAI/HuggingFace",
          "Build LangChain RAG pipeline over PDF files",
          "Add FastAPI backend + React chat UI with streaming",
          "Push DocMind to GitHub with a proper README",
        ],
        resources: ["LangChain docs: RAG tutorial", "ChromaDB quickstart", "LangChain JS/Python cookbook"],
        project: "DocMind",
      },
    ],
  },
  {
    month: "Month 2",
    theme: "LLM Fine-Tuning + DomainLLM",
    color: "#1A6B3C",
    accent: "#34C77B",
    accentGlow: "rgba(52, 199, 123, 0.15)",
    weeks: [
      {
        week: "Week 5",
        title: "Hugging Face Ecosystem",
        daily: "2–3 hrs/day",
        tasks: [
          "Learn Hugging Face: Transformers, Datasets, Tokenizers libraries",
          "Load and run inference on open-source models (Mistral, LLaMA)",
          "Understand model cards, quantization (GGUF, GPTQ, 4-bit)",
          "Run a local LLM with Ollama or llama.cpp",
        ],
        resources: ["Hugging Face course (free)", "Ollama docs", "TheBloke on HuggingFace for quantized models"],
      },
      {
        week: "Week 6",
        title: "Fine-Tuning Theory & Setup",
        daily: "2–3 hrs/day",
        tasks: [
          "Learn LoRA and PEFT: why they work, rank, alpha parameters",
          "Understand instruction tuning datasets (Alpaca, ShareGPT format)",
          "Set up training environment: Google Colab Pro or Kaggle GPU",
          "Prepare a domain-specific dataset (scrape, clean, format as JSONL)",
        ],
        resources: ["DeepLearning.AI: Finetuning LLMs (free)", "PEFT docs on HuggingFace", "Axolotl or Unsloth for easy fine-tuning"],
      },
      {
        week: "Week 7",
        title: "Train, Evaluate & Benchmark",
        daily: "3–4 hrs/day",
        tasks: [
          "Fine-tune Mistral-7B with LoRA using Unsloth (faster, less VRAM)",
          "Set up Weights & Biases for experiment tracking",
          "Evaluate: ROUGE, BERTScore, perplexity vs. base model",
          "Export quantized model (GGUF) and run locally",
        ],
        resources: ["Unsloth GitHub", "W&B quickstart", "EleutherAI lm-evaluation-harness"],
      },
      {
        week: "Week 8",
        title: "Polish DomainLLM + Inference API",
        daily: "3–4 hrs/day",
        tasks: [
          "Wrap fine-tuned model in a FastAPI inference endpoint",
          "Add a simple comparison UI: base model vs fine-tuned responses",
          "Write a detailed README with benchmarks and methodology",
          "Push to GitHub, optionally deploy on HuggingFace Spaces",
          "Start learning about AI Agents (LangChain AgentExecutor intro)",
        ],
        resources: ["HuggingFace Spaces docs", "FastAPI docs", "LangChain Agents intro"],
        project: "DomainLLM",
      },
    ],
  },
  {
    month: "Month 3",
    theme: "AI Agents + AutoAgent + Job Prep",
    color: "#8B1E1E",
    accent: "#E05C5C",
    accentGlow: "rgba(224, 92, 92, 0.15)",
    weeks: [
      {
        week: "Week 9",
        title: "Agentic AI & Tool Use",
        daily: "2–3 hrs/day",
        tasks: [
          "Understand ReAct, Toolformer, and function calling patterns",
          "Learn LangChain AgentExecutor: tools, memory, callbacks",
          "OpenAI function calling: define tools, parse structured outputs",
          "Build a simple agent that can search the web + answer questions",
        ],
        resources: ["LangChain Agents docs", "OpenAI function calling cookbook", "LangGraph intro (for multi-agent flows)"],
      },
      {
        week: "Week 10",
        title: "Build AutoAgent",
        daily: "3–4 hrs/day",
        tasks: [
          "Implement custom tools: web search (SerpAPI), code runner, file reader",
          "Add conversation memory and multi-step reasoning",
          "Build React UI showing chain-of-thought and tool calls in real time",
          "Test on multi-hop QA tasks requiring 3+ tool calls",
        ],
        resources: ["SerpAPI docs", "LangChain memory docs", "Vercel AI SDK for streaming UI"],
        project: "AutoAgent",
      },
      {
        week: "Week 11",
        title: "Polish All 3 Projects + Portfolio",
        daily: "3 hrs/day",
        tasks: [
          "Add live demos to all 3 projects (HuggingFace Spaces / Vercel / Render)",
          "Write detailed READMEs with architecture diagrams, screenshots, benchmarks",
          "Record a 2–3 min demo video for each project (Loom)",
          "Update GitHub profile: pin all 3 projects, write bio targeting AI Engineer roles",
        ],
        resources: ["Vercel (free hosting)", "Render.com", "Loom for demo videos"],
      },
      {
        week: "Week 12",
        title: "Interview Prep & Applications",
        daily: "3–4 hrs/day",
        tasks: [
          "Study common AI Engineer interview topics: RAG, fine-tuning, agents, evals",
          "Practice explaining each project end-to-end in 5 minutes",
          "LeetCode: 20 medium problems (arrays, DP, graphs) for coding rounds",
          "Apply to 10+ AI Engineer / GenAI Engineer roles with updated resume",
          "Start reaching out to AI engineers on LinkedIn for referrals",
        ],
        resources: ["InterviewQs.com AI track", "ML System Design (Chip Huyen's book)", "LinkedIn for outreach"],
      },
    ],
  },
];

const checkedKey = (month, week, task) => `${month}-${week}-${task}`;

export default function Roadmap() {
  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem("aarush_ai_roadmap_checked");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [openMonth, setOpenMonth] = useState(0);
  const [openWeek, setOpenWeek] = useState("Month 1-Week 1");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'pending' | 'completed'
  const [hoveredCard, setHoveredCard] = useState(null);
  const [confirmReset, setConfirmReset] = useState(false);

  // Auto-reset confirmation button state after 4 seconds
  useEffect(() => {
    if (!confirmReset) return;
    const timer = setTimeout(() => {
      setConfirmReset(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [confirmReset]);

  // Save checklist to localStorage
  useEffect(() => {
    localStorage.setItem("aarush_ai_roadmap_checked", JSON.stringify(checked));
  }, [checked]);

  const toggle = (key) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleWeek = (key) => {
    setOpenWeek((prev) => (prev === key ? null : key));
  };

  const getProgress = (month) => {
    const all = month.weeks.flatMap((w) => w.tasks.map((t) => checkedKey(month.month, w.week, t)));
    const done = all.filter((k) => checked[k]).length;
    return {
      done,
      total: all.length,
      pct: all.length > 0 ? Math.round((done / all.length) * 100) : 0,
    };
  };

  const totalTasks = roadmap.flatMap((m) => m.weeks.flatMap((w) => w.tasks));
  const completedCount = Object.keys(checked).filter((k) => checked[k]).length;
  const overallProgress = totalTasks.length > 0 ? Math.round((completedCount / totalTasks.length) * 100) : 0;

  // Filter tasks based on Search Query
  const matchesSearch = (task, weekTitle, resources, projectName) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      task.toLowerCase().includes(q) ||
      weekTitle.toLowerCase().includes(q) ||
      (projectName && projectName.toLowerCase().includes(q)) ||
      resources.some((r) => r.toLowerCase().includes(q))
    );
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at 50% 0%, #111126 0%, #05050A 70%)",
      fontFamily: "'Inter', sans-serif",
      color: "#E8E6E0",
      padding: "60px 24px",
      position: "relative",
    }}>
      {/* Decorative tech glowing background element */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "300px",
        background: "radial-gradient(ellipse at center, rgba(74, 144, 217, 0.1) 0%, rgba(0,0,0,0) 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Main Container */}
      <div style={{ maxWidth: 840, margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div style={{
            fontSize: 12,
            letterSpacing: 4,
            color: "#4A90D9",
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: 16,
            fontFamily: "'Outfit', sans-serif",
          }}>
            ⚡ Aarush Sharma · Masterplan
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 44px)",
            fontWeight: 800,
            margin: "0 0 16px",
            lineHeight: 1.15,
            color: "#FFFFFF",
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, #FFFFFF 60%, #A5C9EB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            AI & GenAI Engineer Roadmap
          </h1>
          <p style={{
            color: "#9999A8",
            fontSize: 16,
            margin: "0 auto",
            maxWidth: 600,
            fontWeight: 400,
            lineHeight: 1.6,
          }}>
            A highly structured 3-month roadmap requiring <span style={{ color: "#FFF", fontWeight: 500 }}>2–4 hours/day</span>,
            focusing on <span style={{ color: "#FFF", fontWeight: 500 }}>3 production-grade portfolio projects</span> to become fully job-ready.
          </p>

          {/* Quick stats grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginTop: 32,
          }}>
            <div style={{
              background: "rgba(19, 19, 35, 0.6)",
              borderRadius: 14,
              padding: "16px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
            }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", fontFamily: "'Outfit', sans-serif" }}>12 Weeks</div>
              <div style={{ fontSize: 12, color: "#777785", marginTop: 4 }}>Structured Learning</div>
            </div>
            <div style={{
              background: "rgba(19, 19, 35, 0.6)",
              borderRadius: 14,
              padding: "16px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
            }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#34C77B", fontFamily: "'Outfit', sans-serif" }}>3 Projects</div>
              <div style={{ fontSize: 12, color: "#777785", marginTop: 4 }}>Portfolio Ready</div>
            </div>
            <div style={{
              background: "rgba(19, 19, 35, 0.6)",
              borderRadius: 14,
              padding: "16px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
            }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#4A90D9", fontFamily: "'Outfit', sans-serif" }}>{overallProgress}%</div>
              <div style={{ fontSize: 12, color: "#777785", marginTop: 4 }}>Total Progress</div>
            </div>
          </div>

          {/* Overall progress bar */}
          <div style={{
            marginTop: 24,
            background: "rgba(19, 19, 35, 0.8)",
            borderRadius: 16,
            padding: "20px 24px",
            border: "1px solid rgba(255, 255, 255, 0.07)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            textAlign: "left",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 13, color: "#9999A8", fontWeight: 500 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4A90D9", display: "inline-block" }}></span>
                Overall Roadmap Mastery
              </span>
              <span style={{ color: "#FFF", fontWeight: 600 }}>{completedCount} / {totalTasks.length} Tasks Finished</span>
            </div>
            <div style={{ height: 8, background: "#161626", borderRadius: 99, overflow: "hidden", position: "relative" }}>
              <div style={{
                height: "100%",
                width: `${overallProgress}%`,
                background: "linear-gradient(90deg, #0F4C81 0%, #4A90D9 50%, #34C77B 100%)",
                borderRadius: 99,
                transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }} />
            </div>
            {overallProgress === 100 && (
              <div style={{ marginTop: 12, color: "#34C77B", fontSize: 13, fontWeight: 600, textAlign: "center", animation: "pulse 2s infinite" }}>
                🎉 Incredible work, Aarush! You've mastered the GenAI curriculum! Ready for applications!
              </div>
            )}
          </div>
        </div>

        {/* Controls: Search and Filter Tabs */}
        <div style={{
          display: "flex",
          gap: 12,
          marginBottom: 24,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Search bar */}
          <div style={{ position: "relative", flex: "1 1 300px" }}>
            <input
              type="text"
              placeholder="Search topics, skills, resources (e.g. 'RAG', 'LoRA')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px 12px 40px",
                borderRadius: 12,
                background: "rgba(19, 19, 35, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#FFFFFF",
                fontSize: 14,
                outline: "none",
                transition: "all 0.3s ease",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#4A90D9";
                e.target.style.boxShadow = "0 0 15px rgba(74, 144, 217, 0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.target.style.boxShadow = "none";
              }}
            />
            {/* Search Icon */}
            <span style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#555566",
              fontSize: 16,
            }}>🔍</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "#888",
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Clear Buttons if there's progress */}
          {completedCount > 0 && (
            <button
              onClick={() => {
                if (confirmReset) {
                  setChecked({});
                  setConfirmReset(false);
                } else {
                  setConfirmReset(true);
                }
              }}
              style={{
                background: confirmReset ? "rgba(224, 92, 92, 0.25)" : "rgba(224, 92, 92, 0.1)",
                color: "#E05C5C",
                border: `1px solid ${confirmReset ? "#E05C5C" : "rgba(224, 92, 92, 0.2)"}`,
                borderRadius: 10,
                padding: "10px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!confirmReset) {
                  e.target.style.background = "rgba(224, 92, 92, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!confirmReset) {
                  e.target.style.background = "rgba(224, 92, 92, 0.1)";
                }
              }}
            >
              {confirmReset ? "⚠️ Confirm Reset?" : "Reset Progress"}
            </button>
          )}
        </div>

        {/* Month Accordions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {roadmap.map((month, mi) => {
            const prog = getProgress(month);
            const isOpen = openMonth === mi;
            const isHovered = hoveredCard === mi;

            // Check if any week/task matches search inside this month
            const monthHasMatches = month.weeks.some((w) =>
              w.tasks.some((t) => matchesSearch(t, w.title, w.resources, w.project))
            );

            if (!monthHasMatches) return null;

            return (
              <div
                key={month.month}
                onMouseEnter={() => setHoveredCard(mi)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  border: `1px solid ${isOpen ? month.accent + "44" : "rgba(255, 255, 255, 0.05)"}`,
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "rgba(15, 15, 24, 0.8)",
                  backdropFilter: "blur(12px)",
                  boxShadow: isHovered
                    ? `0 12px 30px ${month.accentGlow}`
                    : "0 8px 24px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                }}
              >
                {/* Month Card Header */}
                <div
                  onClick={() => setOpenMonth(isOpen ? -1 : mi)}
                  style={{
                    padding: "24px 28px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: isOpen ? `linear-gradient(to right, ${month.color}20, transparent)` : "transparent",
                    transition: "background 0.3s ease",
                    userSelect: "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: `linear-gradient(135deg, ${month.color}dd, ${month.accent})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      fontWeight: 800,
                      color: "#FFFFFF",
                      flexShrink: 0,
                      boxShadow: `0 4px 14px ${month.color}66`,
                      fontFamily: "'Outfit', sans-serif",
                    }}>
                      {mi + 1}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 18, color: "#FFFFFF", fontFamily: "'Outfit', sans-serif" }}>
                        {month.month}
                      </div>
                      <div style={{ fontSize: 13, color: month.accent, marginTop: 4, fontWeight: 500 }}>
                        {month.theme}
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 22, fontWeight: 800, color: month.accent, fontFamily: "'Outfit', sans-serif" }}>
                        {prog.pct}%
                      </div>
                      <div style={{ fontSize: 11, color: "#777785", fontWeight: 500, marginTop: 2 }}>
                        {prog.done} / {prog.total} Tasks Done
                      </div>
                    </div>
                    <div style={{
                      color: isOpen ? month.accent : "#444455",
                      fontSize: 20,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      ▼
                    </div>
                  </div>
                </div>

                {/* Month mini progress bar tracker line */}
                <div style={{ height: 3, background: "rgba(255, 255, 255, 0.03)" }}>
                  <div style={{
                    height: "100%",
                    width: `${prog.pct}%`,
                    background: `linear-gradient(90deg, ${month.color}, ${month.accent})`,
                    transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }} />
                </div>

                {/* Weeks Listing */}
                {isOpen && (
                  <div style={{ padding: "16px 20px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                    {month.weeks.map((week) => {
                      const wKey = `${month.month}-${week.week}`;
                      const wOpen = openWeek === wKey;

                      // Filter tasks for searching
                      const filteredTasks = week.tasks.filter((t) =>
                        matchesSearch(t, week.title, week.resources, week.project)
                      );

                      // If week has no matching search query, hide it
                      if (filteredTasks.length === 0 && searchQuery) return null;

                      const wDone = week.tasks.filter((t) => checked[checkedKey(month.month, week.week, t)]).length;
                      const allDone = wDone === week.tasks.length;

                      return (
                        <div
                          key={week.week}
                          style={{
                            border: `1px solid ${wOpen ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)"}`,
                            borderRadius: 12,
                            overflow: "hidden",
                            background: wOpen ? "rgba(25, 25, 42, 0.5)" : "rgba(10, 10, 18, 0.4)",
                            transition: "all 0.3s ease",
                            boxShadow: wOpen ? "inset 0 1px 1px rgba(255,255,255,0.05)" : "none",
                          }}
                        >
                          {/* Week Trigger Header */}
                          <div
                            onClick={() => toggleWeek(wKey)}
                            style={{
                              padding: "16px 20px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              userSelect: "none",
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                              <div style={{
                                fontSize: 10,
                                letterSpacing: 2,
                                color: "#FFFFFF",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                background: allDone ? "#34C77B" : month.color,
                                padding: "4px 8px",
                                borderRadius: 6,
                                fontFamily: "monospace",
                                display: "inline-block",
                                boxShadow: allDone ? "0 2px 8px rgba(52,199,123,0.3)" : "none",
                              }}>
                                {week.week}
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                                <span style={{
                                  fontSize: 15,
                                  fontWeight: 600,
                                  color: allDone ? "#9999A8" : "#E2E2E9",
                                  textDecoration: allDone ? "line-through" : "none",
                                  transition: "color 0.2s",
                                }}>
                                  {week.title}
                                </span>
                                {week.project && (
                                  <span style={{
                                    fontSize: 10,
                                    background: `rgba(255, 255, 255, 0.05)`,
                                    color: "#FFF",
                                    padding: "3px 8px",
                                    borderRadius: 6,
                                    fontFamily: "monospace",
                                    fontWeight: "bold",
                                    border: `1px solid ${month.accent}88`,
                                    boxShadow: `0 0 10px ${month.accent}44`,
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                  }}>
                                    🚀 {week.project}
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                              <span style={{ fontSize: 12, color: "#666675", fontWeight: 500 }}>
                                ⏱️ {week.daily}
                              </span>
                              <span style={{
                                fontSize: 12,
                                fontWeight: 600,
                                color: allDone ? "#34C77B" : "#888896",
                                background: allDone ? "rgba(52, 199, 123, 0.1)" : "rgba(255,255,255,0.02)",
                                padding: "2px 6px",
                                borderRadius: 4,
                              }}>
                                {wDone}/{week.tasks.length}
                              </span>
                              <span style={{
                                color: wOpen ? month.accent : "#555",
                                transform: wOpen ? "rotate(180deg)" : "rotate(0)",
                                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                fontSize: 12,
                              }}>
                                ▼
                              </span>
                            </div>
                          </div>

                          {/* Expanded Week Content */}
                          {wOpen && (
                            <div style={{
                              padding: "4px 20px 20px",
                              borderTop: "1px solid rgba(255, 255, 255, 0.03)",
                              background: "rgba(0, 0, 0, 0.2)",
                            }}>
                              {/* Task list container */}
                              <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 12 }}>
                                <div style={{
                                  fontSize: 11,
                                  color: "#555566",
                                  textTransform: "uppercase",
                                  letterSpacing: 2,
                                  marginBottom: 6,
                                  fontWeight: 600,
                                }}>
                                  Tasks Checklist
                                </div>
                                {week.tasks.map((task) => {
                                  const key = checkedKey(month.month, week.week, task);
                                  const done = !!checked[key];
                                  const isQueryMatch = searchQuery && task.toLowerCase().includes(searchQuery.toLowerCase());

                                  return (
                                    <div
                                      key={task}
                                      onClick={() => toggle(key)}
                                      style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 12,
                                        padding: "10px 12px",
                                        cursor: "pointer",
                                        borderRadius: 8,
                                        background: isQueryMatch ? "rgba(74, 144, 217, 0.1)" : "transparent",
                                        border: isQueryMatch ? "1px dashed rgba(74, 144, 217, 0.3)" : "1px solid transparent",
                                        transition: "all 0.2s ease",
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = isQueryMatch
                                          ? "rgba(74, 144, 217, 0.15)"
                                          : "rgba(255, 255, 255, 0.02)";
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = isQueryMatch
                                          ? "rgba(74, 144, 217, 0.1)"
                                          : "transparent";
                                      }}
                                    >
                                      {/* Premium custom checkbox */}
                                      <div style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 6,
                                        flexShrink: 0,
                                        marginTop: 2,
                                        border: `2px solid ${done ? month.accent : "rgba(255,255,255,0.2)"}`,
                                        background: done ? month.accent : "transparent",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all 0.2s ease",
                                        boxShadow: done ? `0 0 10px ${month.accent}55` : "none",
                                      }}>
                                        {done && (
                                          <span style={{
                                            color: "#FFFFFF",
                                            fontWeight: 900,
                                            fontSize: 11,
                                            transform: "scale(1.1)",
                                          }}>✓</span>
                                        )}
                                      </div>

                                      {/* Task text */}
                                      <span style={{
                                        fontSize: 14,
                                        color: done ? "#555566" : "#C4C4D0",
                                        textDecoration: done ? "line-through" : "none",
                                        lineHeight: 1.6,
                                        fontWeight: 400,
                                        transition: "all 0.2s",
                                      }}>
                                        {task}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Resources panel */}
                              <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px dashed rgba(255,255,255,0.04)" }}>
                                <div style={{
                                  fontSize: 11,
                                  color: "#555566",
                                  textTransform: "uppercase",
                                  letterSpacing: 2,
                                  marginBottom: 10,
                                  fontWeight: 600,
                                }}>
                                  Recommended Resources
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                  {week.resources.map((res) => {
                                    const isResMatch = searchQuery && res.toLowerCase().includes(searchQuery.toLowerCase());
                                    return (
                                      <span
                                        key={res}
                                        style={{
                                          fontSize: 12,
                                          background: isResMatch ? "rgba(74, 144, 217, 0.15)" : "rgba(255, 255, 255, 0.02)",
                                          color: isResMatch ? "#4A90D9" : "#888896",
                                          padding: "6px 12px",
                                          borderRadius: 20,
                                          border: `1px solid ${isResMatch ? "#4A90D9" : "rgba(255,255,255,0.05)"}`,
                                          fontWeight: isResMatch ? 600 : 400,
                                          boxShadow: isResMatch ? "0 0 10px rgba(74,144,217,0.2)" : "none",
                                        }}
                                      >
                                        📖 {res}
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 64,
          paddingTop: 32,
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          textAlign: "center",
          color: "#444455",
          fontSize: 13,
          lineHeight: 1.6,
        }}>
          <div style={{ fontStyle: "italic", color: "#666675", marginBottom: 8 }}>
            "Consistency beats intensity. 2 focused hours daily &gt; 8 scattered hours once a week."
          </div>
          <div>Aarush Sharma's Roadmap Web Application · Crafting Tomorrow's Intelligent Systems</div>
        </div>

      </div>
    </div>
  );
}
