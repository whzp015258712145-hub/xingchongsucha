interface SponsorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SponsorModal = ({ isOpen, onClose }: SponsorModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="mt-6 mb-4 animate-slideDown">
      <div className="relative max-w-2xl mx-auto">
        {/* 主卡片 */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(107,93,71,0.12)]" style={{ background: '#faf7ed', border: '1px solid #d9cdb3' }}>
          {/* 顶部渐变装饰 */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-amber-50/80 to-transparent pointer-events-none"></div>
          
          {/* 内容区 */}
          <div className="relative p-6">
            {/* 标题区 */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl blur-md" style={{ background: 'rgba(193, 122, 111, 0.2)' }}></div>
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ 
                      background: 'linear-gradient(to bottom right, #d4a574, #c17a6f)',
                      boxShadow: '0 4px 14px rgba(212, 165, 116, 0.25)'
                    }}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold tracking-tight" style={{ color: '#4a3f2f' }}>赞助我</h3>
                </div>
                <p className="text-xs" style={{ color: '#6b5d47' }}>您的支持是我持续创作的动力</p>
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
            
            {/* 微信付款码卡片 */}
            <div className="group relative">
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to right, rgba(139, 115, 85, 0.05), rgba(157, 139, 111, 0.05))' }}></div>
              <div className="relative rounded-xl p-6 transition-all duration-300 group-hover:shadow-md" style={{ 
                background: 'linear-gradient(to bottom right, rgba(245, 240, 225, 0.8), rgba(235, 228, 209, 0.8))',
                border: '1px solid #d9cdb3'
              }}>
                <div className="flex flex-col items-center gap-4">
                  {/* 占位空白 */}
                  <div style={{ height: '32px' }}></div>
                  
                  {/* 二维码 */}
                  <div className="relative group/qr">
                    <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover/qr:opacity-20 blur transition-opacity duration-300" style={{ background: 'linear-gradient(to right, #c17a6f, #d4a574)' }}></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover/qr:scale-105" style={{ width: '400px', height: '400px', border: '1px solid #d9cdb3' }}>
                      <img 
                        src="/wechat-pay.jpg" 
                        alt="微信赞赏码" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* 提示文字 */}
                  <div className="text-center">
                    <p className="text-xs font-serif" style={{ color: '#6b5d47' }}>扫码支持 · 金额随心</p>
                    <div className="mt-2 flex items-center justify-center gap-1">
                      <div className="w-1 h-1 rounded-full" style={{ background: '#c17a6f' }}></div>
                      <div className="w-1 h-1 rounded-full" style={{ background: '#c17a6f' }}></div>
                      <div className="w-1 h-1 rounded-full" style={{ background: '#c17a6f' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
