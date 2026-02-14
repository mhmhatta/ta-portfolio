// src/components/chat/tool-renderer.tsx
import { Contact } from '../contact';
import Crazy from '../crazy';
import InternshipCard from '../InternshipCard';
import { Presentation } from '../presentation';
import AllProjects from '../projects/AllProjects';
import Resume from '../resume';
import Skills from '../skills';
import RV from '../rv';

interface ToolRendererProps {
  toolInvocations: unknown[];
  messageId: string;
}

interface ToolInvocation {
  toolCallId: string;
  toolName: string;
  result?: unknown;
}

export default function ToolRenderer({
  toolInvocations,
}: ToolRendererProps) {
  return (
    <div className="w-full transition-all duration-300">
      {toolInvocations.map((tool) => {
        const { toolCallId, toolName } = tool as ToolInvocation;

        // Return specialized components based on tool name
        switch (toolName) {
          case 'getProjects':
            return (
              <div
                key={toolCallId}
                className="w-full overflow-hidden rounded-lg"
              >
                <AllProjects />
              </div>
            );

          case 'getPresentation':
            return (
              <div
                key={toolCallId}
                className="w-full overflow-hidden rounded-lg"
              >
                <Presentation />
              </div>
            );

          case 'getResume':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Resume />
              </div>
            );

          case 'getContact':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Contact />
              </div>
            );

          case 'getSkills':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Skills />
              </div>
            );

          case 'getCrazy':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <Crazy />
              </div>
            );

          case 'getInternship':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <InternshipCard />
              </div>
            );

          case 'getValentineRv':
            return (
              <div key={toolCallId} className="w-full rounded-lg">
                <RV />
              </div>
            );

          // Default renderer for other tools
          default:
            const typedTool = tool as ToolInvocation;
            return (
              <div
                key={toolCallId}
                className="bg-secondary/10 w-full rounded-lg p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{toolName}</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-100">
                    Tool Result
                  </span>
                </div>
                <div className="mt-2">
                  {typeof typedTool.result === 'object' ? (
                    <pre className="bg-secondary/20 overflow-x-auto rounded p-3 text-sm">
                      {JSON.stringify(typedTool.result, null, 2)}
                    </pre>
                  ) : (
                    <p>{String(typedTool.result)}</p>
                  )}
                </div>
              </div>
            );
        }
      })}
    </div>
  );
}
