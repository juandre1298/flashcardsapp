import { useRef, useEffect } from "react";
import type { UnderModalProp } from "../types/types";


const UnderModal = ({ children, show, onClose, label='' }: UnderModalProp) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (!modalRef.current || !contentRef.current || isDragging.current) return;

    if (show) {
      const contentHeight = contentRef.current.scrollHeight;
      const handleHeight = 40;
      const totalHeight = contentHeight + handleHeight;
      
      modalRef.current.style.height = `${totalHeight}px`;
    } else {
      modalRef.current.style.height = '0px';
    }
  }, [show, children]);

  const startDrag = (e: React.PointerEvent) => {
    isDragging.current = true;
    modalRef.current?.classList.add("dragging");
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const stopDrag = () => {
    isDragging.current = false;
    modalRef.current?.classList.remove("dragging");
  };

  const onMove = (e: PointerEvent) => {
    if (!isDragging.current || !modalRef.current) return;

    const newHeight = window.innerHeight - e.clientY;

    if (newHeight > 50 && newHeight < window.innerHeight * 0.95) {
      modalRef.current.style.height = `${newHeight}px`;
    }

    if (newHeight < 120) {
      onClose?.();
      stopDrag();
    }
  };

  useEffect(() => {
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", stopDrag);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", stopDrag);
    };
  }, []);

  return (
    <>
      <div 
        onClick={onClose}
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
      />

      <div
        ref={modalRef}
        style={{ maxHeight: '85dvh' }} 
        className={`
          fixed bottom-0 left-0 right-0 bg-[#242424] rounded-t-3xl z-50 shadow-2xl
          flex flex-col overflow-hidden
          /* Transition only height, only when NOT dragging */
          [&:not(.dragging)]:transition-[height] [&:not(.dragging)]:duration-500 [&:not(.dragging)]:ease-out
        `}
      >
        <div 
          onPointerDown={startDrag}
          className={`w-full h-10 flex-shrink-0 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none ${label ? ' border-b-gray-500 border-b block mx-auto h-[50px] ' : ''}`}
        >
          {label ? 
            <h2 className="capitalize">{label}</h2> :
            <div className="w-12 h-1.5 bg-zinc-600 rounded-full" />
        }
        </div>

        <div ref={contentRef} className="p-6 overflow-y-auto min-h-0 pb-10">
          {children}
        </div>
      </div>
    </>
  );
};

export default UnderModal;