/* Cause & Effect Troubleshooting Simulator
   Visual language inspired by TH PSA app (dark-glass + neon accents).
   Data source: PDF text extracted from the uploaded HPU C&E document. */

const RAW_CE_TEXT = String.raw`Format Key:
• A: Activate
• O: Open
• C: Close
• S: Stop/Shutdown
• G: Start (Go)
• I: Inhibit
• P: Permissive
• F: Controller Forced to Manual and Output to Safe State
IS-001: Hydrogen Plant General Shut-down
Causes
• Emergency Shutdown Push Button (Control Room) (Tag: EHS-0020)
• Emergency Shutdown Push Button (Local Panel) (Tag: EHS-0001)
• D-1601 Process Steam Drum Low Low Level (Tag: LALL-0012)
• Flue Gas Fan BL-1602 not Running and High Pressure in H-1601 Radiant Box (Tag: XLB-1602 and PAH-0053)
• Combustion Air Fan BL-1601 not running and Low Pressure in H-1601 Radiant Box (Tag: XLB-1601 and PAL-0053)
• Low Low Air to Fuel Ratio (Tag: FFALL-0106) [Note 1, 6, 25: time delay 30s]
• Reformer Low Low Flowrate (Tag: FALL-0044) [Note 1, 2]
• High High Pressure in H-1601 Radiant Box (Tag: PAHH-0053) [Note 1]
• Low Low Pressure in H-1601 Radiant Box (Tag: PALL-0053) [Note 1]
• Hot stand-by (Tag: 16-IS-002) [Note 8: time delay 4 hours, 16-KI-0008]
• Hot stand-by (Tag: 16-IS-002) [Note 8: 3 minutes elapsed & PAHH-0183S]
• Reset (Tag: RHS-0022R)
• Low Pressure in H-1601 Radiant Box (Tag: PAL-0053) [Note 1: time delay 20s, 16-KI-0011]
• High Pressure in H-1601 Radiant Box (Tag: PAH-0053) [Note 1: time delay 15s, 16-KI-0012]
• Low Low Steam flow to Reformer (Tag: FALL-0020) [Note 1, 14: a]
• Flue Gas at Radiant Outlet High High Temperature (Tag: TAHH-0049) [Note 1, 8: time delay 10 min, 16-KI-0006]
• Fuel Gas to burners high high pressure (Tag: PAHH-0183) [Note 1, 18]
• Steam to Carbon Low Low Ratio (Tag: FFALL-0044) [Note 1, 8, 14: time delay 10 min, 16-KI-0016, a]
• Reformer Process Outlet High High Temperature (Tag: TAHH-0051) [Note 1, 8: time delay 10 min, 16-KI-0017]
• Fuel gas to burners low low pressure (Tag: PALL-0183) [Note 2, 16: Burner Interlock]
• Flame detection failure (Tag: BAL-0001-0014) [Note 17, 19, 20: a, Burner Interlock]
Effects
• H2 recycle On/Off valve (Only in HC mode) (Tag: UV-0003) >> Close
• Reformer feed valve (only in HC mode) (Tag: UV-0011) >> Close
• Steam to Reformer feed Valve (Tag: FX-0020) >> Close
• ID Fan BL-1602 (Tag: 16-IS-010) >> Activate
• Feed compressor K-1601 A/B logic (in HC mode) (Tag: 16-IS-012 A/B) >> Activate
• PSA Unit (X-1601) shutdown Logic (Tag: 16-I-015) >> Activate
• DMDS dosing unit shut down (Tag: 16-I-016/I-017) >> Activate
• Phosphate and deoxidant pumps unit shut down (Tag: 16-I-016/I-017) >> Activate
• Degasser Vent Logic (Tag: 16-IS-013) >> Activate
• Natural Gas Feed Valve from BL (Only in HC mode) (Tag: UV-0001) >> Close
• FD Fan BL-1601 Logic (Tag: 16-IS-018) >> Activate
• Purge Gas from B.L. from BL (Only in HC mode) (Tag: UV-0002) >> Close
• Fuel gas to burners 1st block valve (Tag: UV-0048) >> Close
• Fuel gas to burners vent valve (Tag: UV-0049) >> Open
• Fuel gas to burners 2nd block valve (Tag: UV-0050) >> Close

16-IS-002: Hydrogen Plant Hot Stand-by Logic
Causes
• Steam to Carbon Low Low Ratio (Tag: FFALL-0044) [Note 1, 8, 10: time delay 10 min]
• Flue Gas at Radiant Outlet High High Temperature (Tag: TAHH-0049) [Note 1]
• Reformer Process Outlet High High Temperature (Tag: TAHH-0051) [Note 1]
• Reset (Tag: RHS-0044R)
• Emergency Push Button (Tag: EHS-0021)
• Reformer flowrate low low (Tag: FALL-0019) [Note 1, 8, 11]
Effects
• Reformer Feed Valve (Only in HC mode) (Tag: UV-0011) >> Close
• Steam to Reformer feed Valve (Tag: 16-FX-0020) >> Close
• PSA Unit (X-1601) Shut-Down Logic (Tag: 16-IS-003) >> Activate
• Set Fuel Gas To hot-stand-by firing (Tag: PIC-0184) >> Activate
• Hydrogen Plant General Shut-down (Tag: 16-IS-001) >> Activate
• Purge from HCU gas feed valve (Only in HC mode) (Tag: UV-0002) >> Close
• Degasser Vent Logic (Tag: 16-IS-013) >> Activate

16-IP-001: PSA Internal Shutdown Logic
Causes
• Syngas to PSA High High Temperature (Tag: TAHH-0137) [Note 1, 3]
• PSA Internal Shutdown Logic causes (N/A) [Note 7]
• PSA X-1601 Shutdown Logic (Tag: EXS-0786) [Note 16-IS-003]
• Syngas to PSA Low Low Temperature (Tag: TALL-0137) [Note 1, 3]
Effects
• PSA Internal Shutdown Logic effects (Tag: 16-IP-001) >> Activate
• Tail Gas Firing Logic (Tag: XS-0013(16-IS-006)) >> Activate
• H2 CCR Logic (Tag: XS-0013(16-IS-019)) >> Activate

16-IS-004: Process Condensate Separator D-1602 Low Low Level Logic
Causes
• Low Low Liquid Level in Process Condensate Separator (Tag: LALL-0023)
• Reset (Tag: RHS-0045R)
Effects
• Process Condensate Valve (Tag: UV-0027) >> Close

16-IS-005: Boiler Feed Water Pumps P-1601 A/B Logic
Causes
• Low Low Level in Degasser D-1603 (Tag: LALL-0052)
Effects
• Process BFW Pumps P-1601 A (Tag: P-1601 A) >> Stop/Shutdown
• Process BFW Pumps P-1601 B (Tag: P-1601 B) >> Stop/Shutdown

16-I-001: Boiler Feed Water Autostart Pumps
Causes
• Low Pressure on P-1601 A Discharge (Tag: PT-0171) [DCS Logic]
• Low Pressure on P-1601 B Discharge (Tag: PT-0174) [DCS Logic]
Effects
• Stand-by BFW Pump A (Tag: P-1601 A) >> Stop/Shutdown (S), Start (Go) (G)
• Stand-by BFW Pump B (Tag: P-1601 B) >> Start (Go) (G), Stop/Shutdown (S)

16-IS-006: Tail Gas Firing Logic
Causes
• Tail Gas High High Pressure (Tag: PAHH-0186) [Note 1]
• Tail Gas Low Low Pressure (Tag: PALL-0186) [Note 1, 4]
• PSA internal Shutdown Logic (Tag: XS-0013)
• Reset (Tag: RHS-0046R)
• N2 mode Selection (Tag: 16-HS-0018)
Effects
• Tail Gas 1st block Valve (Tag: UV-0054) >> Close
• Tail Gas Vent Valve (Tag: UV-0055) >> Open
• Tail Gas 2nd block Valve (Tag: UV-0056) >> Close
• Ramp Plant Capacity to 40% (Tag: Capacity Control) >> Activate
• Tail Gas Main Control Valve (Man 0%) (Tag: PIC-0185 A/B) >> Close

16-IS-007: Fuel Gas Firing Logic
Causes
• High High Pressure Fuel Gas to burners (Tag: PAHH-0183) [Note 1]
• Low Low Pressure Fuel Gas to burners (Tag: PALL-0183) [Note 1]
• Flame Detection Failure (Tag: BAL-0001 TO 0098) [Note 2, 3]
• Hydrogen Plant General Shut-down (Tag: IS-001)
• High High Pressure Fuel Gas to pilots (Tag: PAHH-0189) [Note 1]
• Low Low Pressure Fuel Gas to pilots (Tag: PALL-0189) [Note 1]
• Reset (Tag: N/A)
Effects
• Fuel Gas to burners 1st ON-OFF Valve (Tag: UV-0048) >> Close
• Fuel Gas to burners Vent Valve (Tag: UV-0049) >> Open
• Fuel Gas to burners 2nd ON-OFF Valve (Tag: UV-0050) >> Close
• Hydrogen Generation Unit Shut-Down (Tag: IS-001) >> Activate
• Fuel Gas to pilots 1st ON-OFF Valve (Tag: UV-0058) >> Close
• Fuel Gas to pilots Vent Valve (Tag: UV-0059) >> Open
• Fuel Gas to pilots 2nd ON-OFF Valve (Tag: UV-0057) >> Close

16-IS-008: Nitrogen recycle Compressor K-1602 Logic
Causes
• High High Level in PSA feed K.O. Drum D-1606 (Tag: LAHH-0035) [Note 1, 4]
• Nitrogen Recycle Compressor Internal shutdown Logic (Tag: XS-0334) [Note 1, 2]
• Reset (Tag: RHS-0047R)
• Emergency shutdown push button (Tag: EHS-0023)
Effects
• Nitrogen Recycle Compressor Internal shutdown causes (Tag: 16-IP-008) >> Activate
• Feed compressor K-1601 A logic (Tag: 16-IS-12 A) >> Activate
• Feed compressor K-1601 B logic (Tag: 16-IS-12 B) >> Activate

16-I-009: Air cooler fan motor vibration Logic
Causes
• High high vibration for EA-1601 air cooler fan motor A1-C2 (Tag: VAHH-9300 A1-C2)
Effects
• EA-1601 fan motor (Tag: EA-1601 A1-C2) >> Stop/Shutdown

16-IS-010: Flue Gas Fan (BL-1602) Logic
Causes
• Hydrogen Plant General Shutdown Logic Activated (Tag: 16-IS-001) [Note 1]
• Low Low Pressure in H-1601 Radiant Box (Tag: PALL-0053) [Note 1]
• Flue gas fan (BL-1602) Inlet Damper Closed (Tag: PZLC-9670)
• High High vibration on Flue gas fan (BL-1602) (Tag: VAHH-1602CM)
Effects
• Flue gas fan BL-1602 (Tag: BL-1602) >> Stop/Shutdown

16-IS-011: PSA Feed gas K.O Drum D-1606 low low level Logic
Causes
• Low Low Liquid level D-1606 (Tag: LALL-0035)
• Reset (Tag: 16-RHS-0048R)
Effects
• K.O Drum Valve (Tag: UV-0038) >> Close

16-IS-012 A/B: Feed Compressor K-1601 A/B Logic
Causes
• Emergency push button (Tag: EHS-0022 A/B)
• Hydrogen generation unit shut down (only in HC mode) (Tag: 16-IS-001)
• K-1602 logic trip (Only N2 mode) (Tag: 16-IS-008)
Effects
• Feed gas compressor Logic internal causes (Tag: 16-IP-012A / 16-IP-012B) >> Activate

16-IS-013: Degasser Vent Logic
Causes
• Low Bridgewall Temperature (Tag: TAL-0049K)
• High high Degasser Vent Flowrate (Tag: FAHH-0095)
• Reset (Tag: RHS-0051R)
• Hydrogen generation Unit Shut Down (Tag: 16-IS-001)
• Hot Stand-by activated (Tag: 16-IS-002)
Effects
• Degasser Vent Valve (Tag: UV-0010) >> Close

16-IS-014: Degasser Overflow Logic
Causes
• High High Level in Degasser D-1603 (Tag: LAHH-0052)
• Reset (Tag: RHS-0052R)
Effects
• Cooling Water Valve (Tag: UV-0037) >> Open
• Overflow valve (Tag: UV-0014) >> Open

16-I-015: DMDS Dosing Unit
Causes
• Hydrogen Plant General Shutdown Logic (Tag: 16-IS-001)
• Low low level in DMDS storage Drum (Tag: LALL-9701)
Effects
• DMDS Dosing Pump (Tag: X-1603-P-03 A/B) >> Stop/Shutdown

16-I-016: Phosphate Solution
Causes
• Hydrogen Plant General Shutdown Logic (Tag: 16-IS-001)
• Low low level in Phosphate storage Drum (Tag: LALL-9712)
Effects
• Phosphate Dosing Pump (Tag: X-1602-P-02 A/B) >> Stop/Shutdown

16-I-017: Deoxidant Solution
Causes
• Hydrogen Plant General Shutdown Logic (Tag: 16-IS-001)
• Low low level in Deoxidant storage Drum (Tag: LALL-9714)
Effects
• Phosphate Dosing Pump (Tag: X-1602-P-02 C/D) >> Stop/Shutdown

16-IS-018: Combustion air fan (BL-1601) Logic
Causes
• Hydrogen Plant General Shutdown (Tag: 16-IS-001)
• High high Pressure in H-1601 Radiant Box (Tag: PAHH-0053)
• Flue gas fan (BL-1602) Running and Combustion air fan (BL-1601) Inlet Damper Closed (Tag: EXLB-1602 and PZLC-9650) [Note 6: Permissive]
Effects
• Combustion air fan BL-1601 (Tag: BL-1601) >> Stop/Shutdown

16-IS-019: H2 CCR Logic
Causes
• PSA X-1601 Internal Shut-down Logic (Tag: XS-0013)
• N2 mode selection (Tag: 16-HS-0018)
Effects
• H2 CCR valve (Tag: 16-HV-0037) >> Close

16-IP-008: Nitrogen Recycle Compressor Internal shutdown Logic
Causes
• Nitrogen Recycle Compressor Internal shutdown Logic (Tag: 16-IP-008) [Note 2, 5]
• Nitrogen recycle Compressor K-1602 Logic (Tag: EXS-0334)
Effects
• Nitrogen Recycle Compressor Internal shutdown Logic (Tag: XS-0334) >> Activate

16-IP-012 A/B: Feed Compressor K-1601 A/B internal shutdown Logic
Causes
• Feed compressor K-1601 A/B internal shutdown logic (Tag: 16-IP-12 A/B)
• Compressor K.O. Drum High high level (Tag: LAHH-0001)
• Feed Compressor K-1601 A/B Logic (Tag: EXS-0330 A/B)
Effects
• Feed Compressor Internal Shutdown Logic (Tag: 16-IP-12 A/B) >> Activate
`;

/** @typedef {{ id:string, kind:'cause'|'logic'|'effect', tag?:string, title:string, detail?:string }} Node */
/** @typedef {{ from:string, to:string, rel:'cause_to_logic'|'logic_to_effect' }} Edge */

function normalizeSpaces(s){ return s.replace(/\s+/g,' ').trim(); }

function stableId(prefix, s){
  const base = s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
  return `${prefix}:${base || 'x'}`;
}

function parseTagFromLine(line){
  // Use a lookahead so the capture includes nested parentheses, e.g.
  // "(Tag: XS-0013(16-IS-006)) >> Activate" returns "XS-0013(16-IS-006)".
  const m = line.match(/\(Tag:\s*([\s\S]+?)\)(?=\s*(?:\[|>>|$))/i);
  if (!m) return null;
  return normalizeSpaces(m[1]);
}

function parseActionFromLine(line){
  const m = line.match(/>>\s*([A-Za-z/ ()-]+)\s*$/);
  if (!m) return null;
  return normalizeSpaces(m[1]);
}

function stripNotes(s){
  return normalizeSpaces(
    s.replace(/\[[^\]]+\]/g,'')
      .replace(/\(Tag:\s*[^)]+\)/gi,'')
      .replace(/>>\s*.*$/,'')
  );
}

function parseSections(raw){
  const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  /** @type {{logicTag:string, logicTitle:string, causes:string[], effects:string[]}[]} */
  const sections = [];

  let current = null;
  let mode = null; // 'causes' | 'effects'

  const headerRe = /^([0-9]{1,2}-[A-Z]{1,2}-[0-9]{3}(?:\s*A\/B)?|IS-[0-9]{3}|16-IP-[0-9]{3}(?:\s*A\/B)?|16-IS-[0-9]{3}(?:\s*A\/B)?|16-I-[0-9]{3})\s*:\s*(.+)$/i;

  for (const line of lines){
    const header = line.match(headerRe);
    if (header){
      if (current) sections.push(current);
      current = { logicTag: normalizeSpaces(header[1]), logicTitle: normalizeSpaces(header[2]), causes: [], effects: [] };
      mode = null;
      continue;
    }
    if (!current) continue;
    if (/^causes$/i.test(line)){ mode = 'causes'; continue; }
    if (/^effects$/i.test(line)){ mode = 'effects'; continue; }
    if (line.startsWith('•')){
      const item = normalizeSpaces(line.replace(/^•\s*/,''));
      if (mode === 'causes') current.causes.push(item);
      else if (mode === 'effects') current.effects.push(item);
    }
  }
  if (current) sections.push(current);
  return sections;
}

// Normalize a tag to a canonical lookup key so references like "16-IS-001",
// "IS-001", "16-IS-12 A", and "XS-0013(16-IS-006)" all resolve against the
// C&E header tags. Handles optional "16-" prefix, zero-padded numerics, and
// nested logic references in parentheses.
function canonicalTagKey(raw){
  if (!raw) return null;
  let t = normalizeSpaces(raw).toUpperCase();
  // If the tag carries a nested logic reference like "XS-0013(16-IS-006)",
  // prefer the inner reference for the chain lookup.
  const nested = t.match(/\(([^()]+)\)/);
  if (nested && /[A-Z]+-\d/.test(nested[1])) t = normalizeSpaces(nested[1]);
  // Strip an optional "16-" plant prefix so "16-IS-001" == "IS-001".
  t = t.replace(/^16-/, '');
  // Zero-pad the short numeric part after the letter prefix ("IS-12" -> "IS-012").
  t = t.replace(/^([A-Z]+-)(\d{1,3})(?=$|[^\d])/, (_, p, n) => p + String(n).padStart(3, '0'));
  return t;
}

// Split combined effect tags like "16-I-016/I-017" into individual refs.
// Keeps "IS-012 A/B" style family markers together, and leaves nested
// paren references for canonicalTagKey to handle.
function splitCombinedTag(raw){
  if (!raw) return [];
  const t = normalizeSpaces(raw);
  if (/\bA\/B\b/i.test(t)) return [t];
  if (/\(/.test(t)) return [t];
  if (!t.includes('/')) return [t];
  const parts = t.split('/').map(s => s.trim()).filter(Boolean);
  const head = parts[0];
  const headMatch = head.match(/^((?:\d+-)?)([A-Z]+)-/i);
  if (!headMatch) return [t];
  const numPrefix = headMatch[1] || '';
  const letterPrefix = headMatch[2];
  return parts.map((p, i) => {
    if (i === 0) return p;
    if (/^[A-Z]+-/i.test(p) && numPrefix && !p.toUpperCase().startsWith(numPrefix.toUpperCase())) return numPrefix + p;
    if (/^\d/.test(p)) return numPrefix + letterPrefix + '-' + p;
    return p;
  });
}

// Expand a section header into every variant key that should resolve to it.
// Example: "16-IS-012 A/B" -> ["IS-012 A/B", "IS-012", "IS-012 A", "IS-012 B"].
function logicTagVariants(rawHeader){
  const canonical = canonicalTagKey(rawHeader);
  if (!canonical) return [];
  const variants = new Set([canonical]);
  const m = canonical.match(/^(.+?)\s+A\/B$/);
  if (m){
    variants.add(m[1]);
    variants.add(`${m[1]} A`);
    variants.add(`${m[1]} B`);
  }
  return [...variants];
}

function buildGraphFromSections(sections){
  /** @type {Map<string, Node>} */
  const nodes = new Map();
  /** @type {Edge[]} */
  const edges = [];

  const ensureNode = (node) => {
    if (!nodes.has(node.id)) nodes.set(node.id, node);
    return nodes.get(node.id);
  };

  const logicIdByTag = new Map();
  for (const s of sections){
    const id = stableId('logic', s.logicTag);
    for (const v of logicTagVariants(s.logicTag)) logicIdByTag.set(v, id);
    ensureNode({ id, kind:'logic', tag:s.logicTag, title:s.logicTitle });
  }

  const pushEdge = (from, to, rel) => {
    if (from === to) return; // skip self-loops
    edges.push({ from, to, rel });
  };

  for (const s of sections){
    const logicId = stableId('logic', s.logicTag);

    for (const rawLine of s.causes){
      const tag = parseTagFromLine(rawLine);
      const title = stripNotes(rawLine);
      const kind = 'cause';

      const id = tag ? stableId('tag', tag) : stableId('cause', title);
      ensureNode({ id, kind, tag: tag || undefined, title });
      pushEdge(id, logicId, 'cause_to_logic');
    }

    for (const rawLine of s.effects){
      const rawTag = parseTagFromLine(rawLine);
      const action = parseActionFromLine(rawLine);
      const title = stripNotes(rawLine);

      // An effect may reference one or more downstream logic blocks.
      // Examples:
      //   "16-IS-010"                 -> single chain to IS-010
      //   "16-IS-12 A"                -> single chain to IS-012 A/B family
      //   "16-I-016/I-017"            -> two chains: I-016 and I-017
      //   "XS-0013(16-IS-006)"        -> single chain to IS-006 (inner)
      const candidates = splitCombinedTag(rawTag);
      /** @type {string[]} */
      const matchedIds = [];
      for (const c of candidates){
        const key = canonicalTagKey(c);
        const mid = key && logicIdByTag.get(key);
        if (mid) matchedIds.push(mid);
      }

      if (matchedIds.length){
        let chained = 0;
        for (const mid of matchedIds){
          if (mid === logicId) continue; // skip self-reference
          pushEdge(logicId, mid, 'logic_to_effect');
          chained++;
        }
        if (chained > 0) continue; // fully chained -> no terminal device node
        // else fall through and render as a terminal effect node
      }

      const id = rawTag ? stableId('tag', rawTag) : stableId('effect', title);
      ensureNode({ id, kind:'effect', tag: rawTag || undefined, title, detail: action ? `Action: ${action}` : undefined });
      pushEdge(logicId, id, 'logic_to_effect');
    }
  }

  return { nodes, edges };
}

function indexForSearch(nodes){
  /** @type {{id:string, haystack:string}[]} */
  const items = [];
  for (const n of nodes.values()){
    const h = normalizeSpaces([n.kind, n.tag || '', n.title || '', n.detail || ''].join(' ')).toLowerCase();
    items.push({ id:n.id, haystack:h });
  }
  return items;
}

function escapeXml(s){
  return s.replace(/[<>&"]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]));
}

function uniqBy(arr, keyFn){
  const seen = new Set();
  const out = [];
  for (const x of arr){
    const k = keyFn(x);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(x);
  }
  return out;
}

function buildAdj(edges){
  /** @type {Map<string, string[]>} */
  const out = new Map();
  /** @type {Map<string, string[]>} */
  const inc = new Map();
  for (const e of edges){
    if (!out.has(e.from)) out.set(e.from, []);
    if (!inc.has(e.to)) inc.set(e.to, []);
    out.get(e.from).push(e.to);
    inc.get(e.to).push(e.from);
  }
  return { out, inc };
}

function traceSubgraph(seedId, depth, direction, adj){
  /** @type {Set<string>} */
  const nodes = new Set([seedId]);
  /** @type {Set<string>} */
  const edgeKey = new Set();
  /** @type {{from:string,to:string}[]} */
  const tracedEdges = [];

  const pushEdge = (from,to) => {
    const k = `${from}->${to}`;
    if (edgeKey.has(k)) return;
    edgeKey.add(k);
    tracedEdges.push({ from, to });
  };

  const bfs = (start, getNext) => {
    /** @type {{id:string, d:number}[]} */
    const q = [{ id:start, d:0 }];
    const seen = new Set([start]);
    while (q.length){
      const { id, d } = q.shift();
      if (d >= depth) continue;
      const next = getNext(id) || [];
      for (const n of next){
        pushEdge(id, n);
        nodes.add(n);
        if (seen.has(n)) continue;
        seen.add(n);
        q.push({ id:n, d:d+1 });
      }
    }
  };

  if (direction === 'down' || direction === 'both'){
    bfs(seedId, (id) => adj.out.get(id));
  }
  if (direction === 'up' || direction === 'both'){
    // upstream edges are stored in inc as "parent -> id" so we pushEdge(parent,id)
    const q = [{ id:seedId, d:0 }];
    const seen = new Set([seedId]);
    while (q.length){
      const { id, d } = q.shift();
      if (d >= depth) continue;
      const prev = adj.inc.get(id) || [];
      for (const p of prev){
        pushEdge(p, id);
        nodes.add(p);
        if (seen.has(p)) continue;
        seen.add(p);
        q.push({ id:p, d:d+1 });
      }
    }
  }

  return { nodeIds: nodes, edges: tracedEdges };
}

function buildLevels(seedId, nodeIds, edges){
  /** @type {Map<string, number>} */
  const level = new Map();
  level.set(seedId, 0);

  // Use a simple relaxation from seed via directed edges; if a node is upstream-only it can get negative.
  // We'll compute from edges: if edge a->b, then level[b] tends toward level[a]+1
  // Run a few passes (graph is small).
  for (let pass=0; pass<8; pass++){
    for (const e of edges){
      if (!nodeIds.has(e.from) || !nodeIds.has(e.to)) continue;
      if (level.has(e.from) && !level.has(e.to)) level.set(e.to, level.get(e.from)+1);
      if (level.has(e.to) && !level.has(e.from)) level.set(e.from, level.get(e.to)-1);
      if (level.has(e.from) && level.has(e.to)){
        const want = level.get(e.from) + 1;
        const cur = level.get(e.to);
        if (cur < want) level.set(e.to, want);
      }
    }
  }

  // Any still-unleveled nodes: put around seed.
  for (const id of nodeIds){
    if (!level.has(id)) level.set(id, 0);
  }

  return level;
}

function layoutGraph(seedId, nodesById, edges, collapseDuplicates){
  // Basic layered layout: x by level, y stacked within each level.
  const level = buildLevels(seedId, new Set(Object.keys(nodesById)), edges);

  /** @type {Map<number, string[]>} */
  const buckets = new Map();
  for (const [id, l] of level.entries()){
    if (!buckets.has(l)) buckets.set(l, []);
    buckets.get(l).push(id);
  }

  // Stable ordering: logic first, then others, then by tag/title.
  const kindRank = { logic:0, cause:1, effect:2 };
  for (const ids of buckets.values()){
    ids.sort((a,b) => {
      const A = nodesById[a], B = nodesById[b];
      if (!A || !B) return 0;
      const kr = (kindRank[A.kind] ?? 9) - (kindRank[B.kind] ?? 9);
      if (kr) return kr;
      const at = (A.tag || A.title || '').toLowerCase();
      const bt = (B.tag || B.title || '').toLowerCase();
      return at.localeCompare(bt);
    });
  }

  // Optional duplicate collapsing: if two nodes share same tag OR same title, stack them at same position.
  /** @type {Map<string, {x:number,y:number,ids:string[]}>} */
  const cluster = new Map();
  const clusterKeyFor = (id) => {
    const n = nodesById[id];
    if (!n) return id;
    if (n.tag) return `tag:${n.tag.toUpperCase()}`;
    return `title:${(n.title || '').toLowerCase()}`;
  };

  const nodeW = 290;
  const nodeH = 82;
  const gapX = 70;
  const gapY = 16;

  /** @type {Record<string, {x:number,y:number,w:number,h:number,clusterKey:string}>} */
  const pos = {};

  const levels = Array.from(buckets.keys()).sort((a,b)=>a-b);
  for (const l of levels){
    const ids = buckets.get(l);
    const x = 80 + (l - levels[0]) * (nodeW + gapX);
    let y = 90;
    for (const id of ids){
      const ck = collapseDuplicates ? clusterKeyFor(id) : id;
      if (collapseDuplicates && cluster.has(ck)){
        pos[id] = { x:cluster.get(ck).x, y:cluster.get(ck).y, w:nodeW, h:nodeH, clusterKey:ck };
        cluster.get(ck).ids.push(id);
        continue;
      }
      pos[id] = { x, y, w:nodeW, h:nodeH, clusterKey:ck };
      if (collapseDuplicates) cluster.set(ck, { x, y, ids:[id] });
      y += nodeH + gapY;
    }
  }

  // Center vertically around mid.
  const ys = Object.values(pos).map(p => p.y);
  const minY = Math.min(...ys, 0);
  const maxY = Math.max(...ys, 0);
  const mid = (minY + maxY) / 2;
  for (const p of Object.values(pos)) p.y = p.y - mid + 260;

  return { pos };
}

function renderGraphSvg(svg, nodesById, edges, layout, seedId){
  const NS = 'http://www.w3.org/2000/svg';
  while (svg.firstChild) svg.removeChild(svg.firstChild);

  const defs = document.createElementNS(NS, 'defs');
  defs.innerHTML = `
    <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0 L10,3.5 L0,7 Z" fill="rgba(160,174,192,.7)"></path>
    </marker>
    <marker id="arrow-down" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0 L10,3.5 L0,7 Z" fill="rgba(252,129,129,.55)"></path>
    </marker>
    <marker id="arrow-up" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0 L10,3.5 L0,7 Z" fill="rgba(74,144,217,.55)"></path>
    </marker>
    <marker id="arrow-logic" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <path d="M0,0 L10,3.5 L0,7 Z" fill="rgba(191,64,255,.55)"></path>
    </marker>
  `;
  svg.appendChild(defs);

  const edgeLayer = document.createElementNS(NS, 'g');
  const nodeLayer = document.createElementNS(NS, 'g');
  svg.appendChild(edgeLayer);
  svg.appendChild(nodeLayer);

  const getCenter = (id) => {
    const p = layout.pos[id];
    return { cx: p.x + p.w/2, cy: p.y + p.h/2, p };
  };

  const kindOf = (id) => nodesById[id]?.kind || 'logic';

  for (const e of edges){
    if (!layout.pos[e.from] || !layout.pos[e.to]) continue;
    const a = getCenter(e.from);
    const b = getCenter(e.to);

    const dx = b.cx - a.cx;
    const sx = a.p.x + a.p.w;
    const tx = b.p.x;
    const sy = a.cy;
    const ty = b.cy;
    // Keep curves compact so the layout doesn't zoom out too much.
    const bend = Math.max(28, Math.min(90, dx * 0.22));
    const c1x = sx + bend;
    const c2x = tx - bend;
    const d = `M ${sx} ${sy} C ${c1x} ${sy}, ${c2x} ${ty}, ${tx} ${ty}`;

    const path = document.createElementNS(NS, 'path');
    path.setAttribute('d', d);
    path.classList.add('edge');

    const fromK = kindOf(e.from);
    const toK = kindOf(e.to);
    let marker = 'url(#arrow)';
    if (toK === 'effect') { path.classList.add('down'); marker = 'url(#arrow-down)'; }
    else if (fromK === 'cause') { path.classList.add('up'); marker = 'url(#arrow-up)'; }
    else { path.classList.add('logic'); marker = 'url(#arrow-logic)'; }
    path.setAttribute('marker-end', marker);
    edgeLayer.appendChild(path);
  }

  for (const [id, n] of Object.entries(nodesById)){
    const p = layout.pos[id];
    if (!p) continue;
    const g = document.createElementNS(NS, 'g');
    g.classList.add('node', n.kind);
    if (id === seedId) g.classList.add('selected');
    g.dataset.nodeId = id;

    const rect = document.createElementNS(NS, 'rect');
    rect.classList.add('node-rect');
    rect.setAttribute('x', String(p.x));
    rect.setAttribute('y', String(p.y));
    rect.setAttribute('width', String(p.w));
    rect.setAttribute('height', String(p.h));
    g.appendChild(rect);

    const title = document.createElementNS(NS, 'text');
    title.classList.add('node-text');
    title.setAttribute('x', String(p.x + 12));
    title.setAttribute('y', String(p.y + 24));
    title.textContent = shrinkText(n.title, 40);
    g.appendChild(title);

    if (n.tag){
      const tagEl = document.createElementNS(NS, 'text');
      tagEl.classList.add('node-tag');
      tagEl.setAttribute('x', String(p.x + 12));
      tagEl.setAttribute('y', String(p.y + 50));
      tagEl.textContent = shrinkText(n.tag, 30);
      g.appendChild(tagEl);

      if (n.detail){
        const det = document.createElementNS(NS, 'text');
        det.classList.add('node-sub');
        det.setAttribute('x', String(p.x + 12));
        det.setAttribute('y', String(p.y + 70));
        det.textContent = shrinkText(n.detail, 50);
        g.appendChild(det);
      }
    } else {
      const sub = document.createElementNS(NS, 'text');
      sub.classList.add('node-sub');
      sub.setAttribute('x', String(p.x + 12));
      sub.setAttribute('y', String(p.y + 50));
      sub.textContent = shrinkText(n.detail || n.kind.toUpperCase(), 56);
      g.appendChild(sub);
    }

    const hit = document.createElementNS(NS, 'rect');
    hit.classList.add('node-hit');
    hit.setAttribute('x', String(p.x));
    hit.setAttribute('y', String(p.y));
    hit.setAttribute('width', String(p.w));
    hit.setAttribute('height', String(p.h));
    g.appendChild(hit);

    nodeLayer.appendChild(g);
  }

  // Set a viewBox that fits all content.
  const all = Object.values(layout.pos);
  if (all.length){
    const minX = Math.min(...all.map(p => p.x)) - 60;
    const minY = Math.min(...all.map(p => p.y)) - 80;
    const maxX = Math.max(...all.map(p => p.x + p.w)) + 60;
    const maxY = Math.max(...all.map(p => p.y + p.h)) + 120;
    const vb = `${minX} ${minY} ${Math.max(300, maxX-minX)} ${Math.max(200, maxY-minY)}`;
    svg.setAttribute('viewBox', vb);
    svg.dataset.baseViewBox = vb;
    svg.dataset.viewBox = vb;
  }
}

function setPill(ok, text){
  const pill = document.getElementById('dataset-pill');
  const t = document.getElementById('dataset-pill-text');
  pill.classList.toggle('ok', ok === true);
  pill.classList.toggle('bad', ok === false);
  t.textContent = text;
}

function kindLabel(kind){
  if (kind === 'logic') return 'Logic';
  if (kind === 'cause') return 'Cause';
  return 'Effect';
}

function shrinkText(s, maxChars){
  const t = normalizeSpaces(String(s || ''));
  if (t.length <= maxChars) return t;
  return t.slice(0, Math.max(0, maxChars - 1)) + '…';
}

function parseViewBox(vb){
  const parts = String(vb || '').trim().split(/\s+/).map(Number);
  if (parts.length !== 4 || parts.some(n => !Number.isFinite(n))) return null;
  const [x, y, w, h] = parts;
  if (w <= 0 || h <= 0) return null;
  return { x, y, w, h };
}

function setViewBox(svg, box){
  const vb = `${box.x} ${box.y} ${box.w} ${box.h}`;
  svg.setAttribute('viewBox', vb);
  svg.dataset.viewBox = vb;
}

function zoomSvgAt(svg, clientX, clientY, zoomFactor){
  const cur = parseViewBox(svg.getAttribute('viewBox'));
  if (!cur) return;

  const rect = svg.getBoundingClientRect();
  const px = (clientX - rect.left) / Math.max(1, rect.width);
  const py = (clientY - rect.top) / Math.max(1, rect.height);

  const mx = cur.x + cur.w * px;
  const my = cur.y + cur.h * py;

  const nextW = cur.w / zoomFactor;
  const nextH = cur.h / zoomFactor;
  const nextX = mx - nextW * px;
  const nextY = my - nextH * py;

  setViewBox(svg, { x: nextX, y: nextY, w: nextW, h: nextH });
}

function installWheelZoom(svg, wrap){
  // Smooth zoom: accumulate wheel intent then animate.
  let target = null;
  let raf = 0;

  const apply = () => {
    raf = 0;
    if (svg.__panning){ target = null; return; }
    const cur = parseViewBox(svg.getAttribute('viewBox'));
    if (!cur || !target) return;

    const lerp = (a,b,t) => a + (b-a)*t;
    const t = 0.18;
    const next = {
      x: lerp(cur.x, target.x, t),
      y: lerp(cur.y, target.y, t),
      w: lerp(cur.w, target.w, t),
      h: lerp(cur.h, target.h, t),
    };
    setViewBox(svg, next);

    const done =
      Math.abs(next.w - target.w) < 0.01 &&
      Math.abs(next.h - target.h) < 0.01 &&
      Math.abs(next.x - target.x) < 0.01 &&
      Math.abs(next.y - target.y) < 0.01;
    if (!done) raf = requestAnimationFrame(apply);
  };

  wrap.addEventListener('wheel', (e) => {
    // Only when graph exists
    if (!svg.getAttribute('viewBox')) return;
    e.preventDefault();

    const base = parseViewBox(svg.getAttribute('viewBox'));
    if (!base) return;

    const delta = Math.max(-120, Math.min(120, e.deltaY));
    const step = Math.exp(-delta / 420); // smooth exponential
    const rect = svg.getBoundingClientRect();
    const px = (e.clientX - rect.left) / Math.max(1, rect.width);
    const py = (e.clientY - rect.top) / Math.max(1, rect.height);
    const mx = base.x + base.w * px;
    const my = base.y + base.h * py;

    const nextW = base.w / step;
    const nextH = base.h / step;
    const nextX = mx - nextW * px;
    const nextY = my - nextH * py;

    // Clamp zoom so user can't lose the graph.
    const baseFit = parseViewBox(svg.dataset.baseViewBox);
    const minW = baseFit ? baseFit.w * 0.25 : 150;
    const maxW = baseFit ? baseFit.w * 4.0 : 6000;
    const clampedW = Math.max(minW, Math.min(maxW, nextW));
    const clampedH = Math.max(minW * (nextH/nextW), Math.min(maxW * (nextH/nextW), nextH));

    target = { x: nextX, y: nextY, w: clampedW, h: clampedH };
    if (!raf) raf = requestAnimationFrame(apply);
  }, { passive:false });
}

function installPan(svg, wrap){
  // Mouse/pointer drag to pan the viewBox. Coexists with wheel zoom and the
  // node click-to-reseed handler (a click is suppressed only if the drag
  // actually moved beyond a small pixel threshold).
  let active = false;
  let startCX = 0, startCY = 0;
  let startVB = null;
  let moved = false;
  // Keep this generous so small hand jitter during a click still counts as a
  // click (so clicking a node to re-seed the trace works reliably).
  const MOVE_PX = 8;

  const onDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return; // primary only
    const vb = parseViewBox(svg.getAttribute('viewBox'));
    if (!vb) return;
    active = true;
    moved = false;
    startCX = e.clientX;
    startCY = e.clientY;
    startVB = vb;
    svg.__panning = true;
    svg.__panMoved = false;
    wrap.classList.add('panning');
    if (e.pointerId !== undefined){
      try { svg.setPointerCapture && svg.setPointerCapture(e.pointerId); } catch (_){ /* noop */ }
    }
  };

  const onMove = (e) => {
    if (!active || !startVB) return;
    const rect = svg.getBoundingClientRect();
    const scaleX = startVB.w / Math.max(1, rect.width);
    const scaleY = startVB.h / Math.max(1, rect.height);
    const dxPx = e.clientX - startCX;
    const dyPx = e.clientY - startCY;
    if (!moved && Math.hypot(dxPx, dyPx) > MOVE_PX){
      moved = true;
      svg.__panMoved = true;
    }
    setViewBox(svg, {
      x: startVB.x - dxPx * scaleX,
      y: startVB.y - dyPx * scaleY,
      w: startVB.w,
      h: startVB.h,
    });
  };

  const onUp = (e) => {
    if (!active) return;
    active = false;
    startVB = null;
    svg.__panning = false;
    wrap.classList.remove('panning');
    if (e && e.pointerId !== undefined){
      try { svg.releasePointerCapture && svg.releasePointerCapture(e.pointerId); } catch (_){ /* noop */ }
    }
    // Keep the suppression flag alive just long enough for the trailing
    // "click" event (fired right after pointerup) to read it.
    if (moved){
      setTimeout(() => { svg.__panMoved = false; }, 30);
    } else {
      svg.__panMoved = false;
    }
  };

  svg.addEventListener('pointerdown', onDown);
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointercancel', onUp);
}

function renderResults(list, nodes, onPick){
  const el = document.getElementById('results');
  el.innerHTML = '';
  if (!list.length){
    const empty = document.createElement('div');
    empty.className = 'selected empty';
    empty.textContent = 'No matches.';
    el.appendChild(empty);
    return;
  }
  for (const id of list){
    const n = nodes.get(id);
    if (!n) continue;
    const btn = document.createElement('button');
    btn.className = 'result-btn';
    btn.type = 'button';
    const tagHtml = n.tag ? `<span class="result-tag">${escapeXml(n.tag)}</span>` : '';
    const detailHtml = n.detail ? `<span class="result-detail">${n.tag ? ' • ' : ''}${escapeXml(n.detail)}</span>` : '';
    btn.innerHTML = `
      <div class="result-top">
        <span class="chip ${escapeXml(n.kind)}">${escapeXml(kindLabel(n.kind))}</span>
        <div class="result-title">${escapeXml(n.title)}</div>
      </div>
      <div class="result-sub">${tagHtml}${detailHtml}</div>
    `;
    btn.addEventListener('click', () => onPick(id));
    el.appendChild(btn);
  }
}

function renderSelected(id, nodes){
  const el = document.getElementById('selected');
  if (!id){
    el.classList.add('empty');
    el.textContent = 'Nothing selected yet.';
    return;
  }
  const n = nodes.get(id);
  if (!n){
    el.classList.add('empty');
    el.textContent = 'Selection not found.';
    return;
  }
  el.classList.remove('empty');
  el.innerHTML = `
    <div style="display:flex;gap:10px;align-items:center;margin-bottom:6px">
      <span class="chip ${escapeXml(n.kind)}">${escapeXml(kindLabel(n.kind))}</span>
      <div style="font-weight:900">${escapeXml(n.title)}</div>
    </div>
    <div style="font-size:12px">
      ${n.tag ? `<div class="result-tag">${escapeXml(n.tag)}</div>` : ``}
      ${n.detail ? `<div class="result-detail">${escapeXml(n.detail)}</div>` : ``}
    </div>
  `;
}

function fitSvgToContainer(svg){
  // Reset to the auto-fit viewBox computed on last render.
  const base = parseViewBox(svg.dataset.baseViewBox);
  if (base) setViewBox(svg, base);
  const mode = document.getElementById('mode-label');
  mode.textContent = '🟣 FIT';
  setTimeout(() => { mode.textContent = '🟢 READY'; }, 450);
}

function main(){
  const intro = document.getElementById('intro-overlay');
  document.getElementById('intro-start-btn').addEventListener('click', () => intro.classList.add('hide'));

  const sections = parseSections(RAW_CE_TEXT);
  const { nodes, edges } = buildGraphFromSections(sections);
  const searchIndex = indexForSearch(nodes);
  const adj = buildAdj(edges);

  setPill(true, `Dataset: ${sections.length} blocks • ${nodes.size} nodes • ${edges.length} links`);

  const input = document.getElementById('sb-search');
  const wrap = document.getElementById('sb-search-wrap');
  const clear = document.getElementById('sb-search-clear');
  const collapseDupes = document.getElementById('collapse-duplicates');
  const statusRight = document.getElementById('status-right');
  const svg = document.getElementById('graph');
  const graphWrap = document.getElementById('graph-wrap');

  let selectedId = null;
  let lastResults = [];

  function computeMatches(q){
    const query = normalizeSpaces(q).toLowerCase();
    if (!query) return [];
    const parts = query.split(' ').filter(Boolean);
    const hits = [];
    for (const it of searchIndex){
      let ok = true;
      for (const p of parts){
        if (!it.haystack.includes(p)) { ok = false; break; }
      }
      if (ok) hits.push(it.id);
    }
    // Prefer logic tags first
    hits.sort((a,b) => {
      const A = nodes.get(a), B = nodes.get(b);
      const rank = (k) => (k === 'logic' ? 0 : k === 'cause' ? 1 : 2);
      const r = rank(A?.kind) - rank(B?.kind);
      if (r) return r;
      const at = (A?.tag || A?.title || '').toLowerCase();
      const bt = (B?.tag || B?.title || '').toLowerCase();
      return at.localeCompare(bt);
    });
    return hits.slice(0, 40);
  }

  function pick(id){
    selectedId = id;
    renderSelected(selectedId, nodes);

    const d = 4;      // fixed depth (UI removed)
    const dir = 'both'; // fixed direction (UI removed)
    const { nodeIds, edges: traced } = traceSubgraph(selectedId, d, dir, adj);

    /** @type {Record<string, Node>} */
    const subNodes = {};
    for (const nid of nodeIds){
      const n = nodes.get(nid);
      if (n) subNodes[nid] = n;
    }

    const collapse = !!collapseDupes.checked;
    const layout = layoutGraph(selectedId, subNodes, traced, collapse);
    renderGraphSvg(svg, subNodes, traced, layout, selectedId);

    // Re-trigger the re-seed animation so the user sees a clear transition
    // to the newly selected node's data.
    svg.classList.remove('reseeding');
    // force reflow so removing+adding the class restarts the animation
    void svg.getBoundingClientRect();
    svg.classList.add('reseeding');

    statusRight.textContent = `${nodeIds.size} nodes • ${traced.length} links`;
  }

  function reset(){
    selectedId = null;
    renderSelected(null, nodes);
    document.getElementById('results').innerHTML = '';
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    statusRight.textContent = '';
  }

  function updateResults(){
    const q = input.value || '';
    wrap.classList.toggle('has-text', q.trim().length > 0);
    lastResults = computeMatches(q);
    renderResults(lastResults, nodes, pick);
    if (q.trim().length === 0){
      document.getElementById('results').innerHTML = '';
      return;
    }
  }

  input.addEventListener('input', updateResults);
  clear.addEventListener('click', () => {
    input.value = '';
    input.focus();
    updateResults();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && lastResults.length) pick(lastResults[0]);
  });

  collapseDupes.addEventListener('change', () => { if (selectedId) pick(selectedId); });

  document.getElementById('btn-fit').addEventListener('click', () => fitSvgToContainer(svg));
  document.getElementById('btn-reset').addEventListener('click', reset);

  // Allow graph node click to re-seed tracing.
  svg.addEventListener('click', (e) => {
    if (svg.__panMoved) return; // swallow the click that ended a drag-pan
    const g = e.target?.closest?.('.node');
    const id = g?.dataset?.nodeId;
    if (id) pick(id);
  });

  installWheelZoom(svg, graphWrap);
  installPan(svg, graphWrap);
  reset();
}

try{
  main();
}catch(err){
  console.error(err);
  setPill(false, 'Dataset: error parsing/building graph');
  const mode = document.getElementById('mode-label');
  if (mode) mode.textContent = '🔴 ERROR';
}

