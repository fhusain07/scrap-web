import React, { useState } from 'react';

import Button from '../../../components/ui/Button';

const ReferenceNumber = ({ referenceNumber }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard?.writeText(referenceNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy reference number:', err);
    }
  };

  return (
    <div className="bg-muted/50 border border-border rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <label className="text-sm font-medium text-muted-foreground">Reference Number</label>
          <p className="text-lg font-mono font-bold text-primary">{referenceNumber}</p>
          <p className="text-xs text-muted-foreground mt-1">Save this number for your records</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          iconName={copied ? "Check" : "Copy"}
          iconPosition="left"
          className="ml-4"
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
    </div>
  );
};

export default ReferenceNumber;