interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="mt-6 mb-4 animate-slideDown">
      <div className="relative max-w-lg mx-auto">
        {/* 主卡片 */}
        <div className="relative rounded-2xl shadow-[0_8px_30px_rgba(107,93,71,0.12)] overflow-hidden" style={{ background: '#faf7ed', border: '1px solid #d9cdb3' }}>
          {/* 顶部渐变装饰 */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-50/80 to-transparent pointer-events-none"></div>
          
          {/* 内容区 */}
          <div className="relative p-6">
            {/* 标题区 */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl blur-md" style={{ background: 'rgba(193, 122, 111, 0.2)' }}></div>
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ 
                      background: 'linear-gradient(to bottom right, #c17a6f, #a86b61)',
                      boxShadow: '0 4px 14px rgba(193, 122, 111, 0.25)'
                    }}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold tracking-tight" style={{ color: '#4a3f2f' }}>联系我</h3>
                </div>
                <a 
                  href="mailto:whzp015258712145@gmail.com"
                  className="text-sm transition-colors font-mono hover:underline underline-offset-2"
                  style={{ color: '#6b5d47', textDecorationColor: '#c17a6f' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#c17a6f'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6b5d47'}
                >
                  whzp015258712145@gmail.com
                </a>
                {/* 底部占位空白 */}
                <div style={{ height: '32px' }}></div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: '#ebe4d1' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#d9cdb3'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#ebe4d1'}
                aria-label="关闭"
              >
                <svg className="w-4 h-4" style={{ color: '#8b7355' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
