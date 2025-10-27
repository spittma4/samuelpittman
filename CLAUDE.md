# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This project is a personal/professional/showcase website for an experienced senior software engineer. Specializes in Laravel + Livewire development. Experience managing
projects from idea to scaling, leading small teams, and interacting with stakeholders.

## Development Commands

```
npm run dev                # Start Vite dev server with hot reload
npm run build              # Production build
```

## Documentation Preferences
- Use context7 (MCP server) for library/framework documentation when available
- Context7 provides more accurate, up-to-date API references than web search
- Particularly important for: Laravel, Laravel Livewire, Flux UI, Alpine.js, Tailwind CSS

## Multi-Agent Context Sharing

### Context File Management
**🚨 CRITICAL - AUTOMATIC CONTEXT UPDATES REQUIRED 🚨**

You MUST update `.claude/context.json` IMMEDIATELY and AUTOMATICALLY. This is NOT optional.

#### Update Context IMMEDIATELY When:
✅ **After EVERY file modification** - Don't wait for task completion  
✅ **When discovering ANY pattern** - Document it instantly  
✅ **After fixing ANY error** - Record the solution immediately  
✅ **When learning how code works** - Capture the knowledge now  
✅ **After EACH subtask completion** - Update progress in real-time  
✅ **BEFORE ending conversation** - Final context update is mandatory  

**DO NOT**:
- ❌ Wait to be asked to update context
- ❌ Batch updates for later
- ❌ Skip "minor" discoveries
- ❌ Assume another agent will document it

**ENFORCEMENT**: Treat context updates as PART of the task, not separate from it. A task is NOT complete until context is updated.

#### Context File Structure
Update `.claude/context.json` with:
```json
{
  "lastUpdated": "ISO 8601 timestamp",
  "agent": "agent identifier or purpose",
  "recentChanges": [
    {
      "timestamp": "ISO 8601 timestamp",
      "description": "What was done",
      "files": ["list of affected files"],
      "notes": "Important details or warnings"
    }
  ],
  "currentWork": {
    "inProgress": ["List of work currently being done"],
    "blocked": ["List of blocked items with reasons"],
    "completed": ["Recent completions not yet integrated"]
  },
  "discoveries": {
    "patterns": ["Discovered patterns or conventions"],
    "gotchas": ["Tricky issues or non-obvious behaviors"],
    "dependencies": ["Important dependency information"]
  },
  "todos": ["Known issues or future work items"]
}
```

#### File Size Management
**IMPORTANT**: Keep context.json under 50KB to ensure it remains fast to read/write.

**Pruning Rules**:
- Keep only the **last 20 entries** in `recentChanges` (regardless of age)
- Archive when file exceeds 50KB to `.claude/archive/context-YYYY-MM-DD.json`
- Group changes by **work session** (same day = same session)
- Deduplicate entries in `discoveries` sections
- Mark completed items as "merged" when they're in main branch

**Session-Based Structure**:
```json
{
  "recentChanges": [
    {
      "session": "2025-01-25",  // Groups related work
      "timestamp": "ISO 8601 timestamp",
      "branch": "current git branch name",
      "description": "What was done",
      "files": ["affected files"],
      "notes": "Important details",
      "merged": false  // Set to true when changes reach main branch
    }
  ]
}
```

**Git Integration Considerations**:
- **Primary branch**: `main` is the primary branch - mark work as "merged": true when it reaches main
- **DON'T commit context.json** - Keep it in .gitignore to avoid merge conflicts
- **DO note current branch** in each change entry
- When switching branches, add a note about branch context switch
- Work on feature branches can be marked as "experimental" or "pending merge"
- Consider creating `.claude/discoveries.md` for permanent knowledge that should be committed

**Archive Strategy**:
```bash
# Check file size (works on macOS and Linux)
SIZE=$(wc -c < .claude/context.json)
if [ $SIZE -gt 51200 ]; then
  # Archive with timestamp
  cp .claude/context.json ".claude/archive/context-$(date +%Y-%m-%d-%H%M%S).json"
  # Prune old entries, keep discoveries
fi
```

**What to Preserve During Rotation**:
- All items in `discoveries` (deduplicated) 
- Current `inProgress` and `blocked` items
- Last 20 entries from `recentChanges`
- Active `todos` not marked as "merged"
- Branch-specific context if still relevant

#### Reading Context on Start
**ALWAYS** read `.claude/context.json` at the beginning of each session to understand:
- What other agents have been working on
- Recent changes to the codebase
- Known issues or blockers
- Discovered patterns or gotchas

#### Example Update Command
After completing work:
```bash
# Read existing context
cat .claude/context.json

# Update with your changes (using appropriate tool)
# Include: what you did, what files changed, any important discoveries
```

This shared context ensures smooth handoffs between agents and prevents duplicate work or conflicts.
