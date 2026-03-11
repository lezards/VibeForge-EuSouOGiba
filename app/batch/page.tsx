'use client';

import React from 'react';
import { StudioLayout } from '@/components/studio/StudioLayout';
import { BatchGrid } from '@/components/batch/BatchGrid';
import { PromptChat } from '@/components/studio/PromptChat';

export default function BatchPage() {
  return (
    <StudioLayout>
      <div className="flex h-full overflow-hidden">
        {/* Main Grid Area */}
        <div className="flex-grow overflow-hidden">
          <BatchGrid />
        </div>

        {/* AI Assistant Sidebar */}
        <div className="w-80 border-l border-white/5 bg-navy-900/30 backdrop-blur-xl hidden xl:block">
          <PromptChat 
            title="Batch Assistant" 
            placeholder="Ask for batch ideas or quantity suggestions..."
          />
        </div>
      </div>
    </StudioLayout>
  );
}
