import"./preload-helper-DGWYlufl.js";import{X as e,t}from"./iframe-NwMaSmER.js";import{C as n,D as r,E as i,S as a,T as o,_ as s,a as c,b as l,c as u,d,f,g as p,h as m,i as h,l as g,m as _,n as v,o as y,p as b,r as x,s as S,t as C,u as w,v as T,w as E,x as D}from"./toaster-K1aek-Qw.js";import"./react-dom-D1Ycpzhz.js";import{t as O}from"./input-BT8ZiV5l.js";var k=e(),A=t(),j=/^[а-яА-ЯёЁ әғқңөұүhіӘҒҚҢӨҰҮHІ\s-]*$/,M=_({carNumber:m().min(1,`Автомобильный номер обязателен`).regex(/^[A-Za-z0-9\s-]*$/,`Допустимы только английские буквы и цифры`).transform(e=>e.trim().toUpperCase()),employeeName:m().min(1,`Имя обязательно`).regex(j,`Допустимы только русские и казахские буквы`).transform(e=>{let t=e.trim();return t&&t.charAt(0).toUpperCase()+t.slice(1)}),employeeLastName:m().min(1,`Фамилия обязательна`).regex(j,`Допустимы только русские и казахские буквы`).transform(e=>{let t=e.trim();return t&&t.charAt(0).toUpperCase()+t.slice(1)})});function N(){let e=r(),{toast:t}=D(),[n,i]=(0,k.useState)(!1),o=b({resolver:f(M),defaultValues:{carNumber:``,employeeName:``,employeeLastName:``},mode:`onSubmit`}),m=async n=>{i(!0);try{let r=new URLSearchParams(globalThis.location.search).get(`mockId`)||globalThis.Telegram?.WebApp?.initDataUnsafe?.user?.id;if(globalThis.location.hostname===`localhost`&&!r&&(console.warn(`Running in DEV mode: Using mock Telegram ID (${p})`),r=p),!r){t({variant:`destructive`,title:`Ошибка`,description:`Не удалось определить Telegram ID пользователя`});return}let i=await fetch(`/transport`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({telegramId:r,carNumber:n.carNumber,employee:{name:n.employeeName,lastName:n.employeeLastName}})});i.ok?(t({title:`Успешно`,description:`Транспорт успешно добавлен!`}),e(s.TRANSPORT_DASHBOARD)):t({variant:`destructive`,title:`Ошибка`,description:(await i.json().catch(()=>({}))).message||`Ошибка при добавлении транспорта`})}catch(e){console.error(e),t({variant:`destructive`,title:`Ошибка сети`,description:`Не удалось выполнить запрос`})}finally{i(!1)}};return(0,A.jsxs)(`div`,{className:`max-w-4xl mx-auto p-6`,children:[(0,A.jsxs)(`div`,{className:`flex items-center justify-between mb-6`,children:[(0,A.jsxs)(a,{variant:`ghost`,onClick:()=>e(s.TRANSPORT_DASHBOARD),className:`flex items-center gap-2`,children:[(0,A.jsx)(l,{className:`h-4 w-4`}),`Назад к транспорту`]}),(0,A.jsx)(`h1`,{className:`text-2xl font-bold`,children:`Добавить транспорт`})]}),(0,A.jsxs)(u,{children:[(0,A.jsx)(w,{children:(0,A.jsxs)(d,{className:`flex items-center gap-2`,children:[(0,A.jsx)(T,{className:`h-5 w-5`}),`Информация о транспорте`]})}),(0,A.jsx)(g,{children:(0,A.jsx)(v,{...o,children:(0,A.jsxs)(`form`,{onSubmit:o.handleSubmit(m),className:`space-y-6`,children:[(0,A.jsx)(h,{control:o.control,name:`carNumber`,render:({field:e})=>(0,A.jsxs)(c,{children:[(0,A.jsx)(y,{children:`Номер машины`}),(0,A.jsx)(x,{children:(0,A.jsx)(O,{placeholder:`Например: A123BC 777`,...e,onChange:t=>{e.onChange(t.target.value.toUpperCase())},className:`text-lg py-3 h-10`})}),(0,A.jsx)(S,{})]})}),(0,A.jsx)(h,{control:o.control,name:`employeeLastName`,render:({field:e})=>(0,A.jsxs)(c,{children:[(0,A.jsx)(y,{children:`Фамилия сотрудника`}),(0,A.jsx)(x,{children:(0,A.jsx)(O,{placeholder:`Иванов`,...e,className:`text-lg py-3 h-10`})}),(0,A.jsx)(S,{})]})}),(0,A.jsx)(h,{control:o.control,name:`employeeName`,render:({field:e})=>(0,A.jsxs)(c,{children:[(0,A.jsx)(y,{children:`Имя сотрудника`}),(0,A.jsx)(x,{children:(0,A.jsx)(O,{placeholder:`Иван`,...e,className:`text-lg py-3 h-10`})}),(0,A.jsx)(S,{})]})}),(0,A.jsx)(`div`,{className:`pt-4`,children:(0,A.jsx)(a,{type:`submit`,className:`w-full h-12 text-lg flex items-center gap-2`,disabled:n,children:n?`Добавление...`:`Добавить транспорт`})})]})})})]})]})}N.__docgenInfo={description:``,methods:[],displayName:`AddTransport`};var P={title:`Pages/Transport/AddTransport`,component:N,decorators:[e=>(0,A.jsxs)(i,{children:[(0,A.jsx)(e,{}),(0,A.jsx)(C,{})]})],parameters:{layout:`fullscreen`}};const F={},I={play:async({canvasElement:e,step:t})=>{let r=o(e),i=r.getByLabelText(/Номер машины/i),a=r.getByLabelText(/Имя сотрудника/i),s=r.getByLabelText(/Фамилия сотрудника/i),c=r.getByRole(`button`,{name:/Добавить транспорт/i});await t(`Отправка пустой формы должна показать ошибки`,async()=>{await E.click(c),n(await r.findByText(`Автомобильный номер обязателен`)).toBeInTheDocument(),n(await r.findByText(`Имя обязательно`)).toBeInTheDocument(),n(await r.findByText(`Фамилия обязательна`)).toBeInTheDocument()}),await t(`Ввод кириллицы в номер машины`,async()=>{await E.clear(i),await E.type(i,`А123БВ`),n(await r.findByText(`Допустимы только английские буквы и цифры`)).toBeInTheDocument(),await E.clear(i)}),await t(`Ввод неверных символов в имя`,async()=>{await E.clear(a),await E.type(a,`John123`),n(await r.findByText(`Допустимы только русские и казахские буквы`)).toBeInTheDocument(),await E.clear(a)}),await t(`Подстановка валидных данных`,async()=>{await E.clear(i),await E.type(i,`A123BC`),await E.clear(a),await E.type(a,`Иван`),await E.clear(s),await E.type(s,`Иванов`),await E.click(c),n(r.queryByText(`Автомобильный номер обязателен`)).not.toBeInTheDocument()})}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const carNumberInput = canvas.getByLabelText(/Номер машины/i);
    const employeeNameInput = canvas.getByLabelText(/Имя сотрудника/i);
    const employeeLastNameInput = canvas.getByLabelText(/Фамилия сотрудника/i);
    const submitBtn = canvas.getByRole('button', {
      name: /Добавить транспорт/i
    });
    await step('Отправка пустой формы должна показать ошибки', async () => {
      await userEvent.click(submitBtn);
      // Ошибки должны появиться
      expect(await canvas.findByText('Автомобильный номер обязателен')).toBeInTheDocument();
      expect(await canvas.findByText('Имя обязательно')).toBeInTheDocument();
      expect(await canvas.findByText('Фамилия обязательна')).toBeInTheDocument();
    });
    await step('Ввод кириллицы в номер машины', async () => {
      await userEvent.clear(carNumberInput);
      await userEvent.type(carNumberInput, 'А123БВ'); // русские буквы
      // Здесь Zod должен выдать ошибку
      expect(await canvas.findByText('Допустимы только английские буквы и цифры')).toBeInTheDocument();
      await userEvent.clear(carNumberInput);
    });
    await step('Ввод неверных символов в имя', async () => {
      await userEvent.clear(employeeNameInput);
      await userEvent.type(employeeNameInput, 'John123');
      expect(await canvas.findByText('Допустимы только русские и казахские буквы')).toBeInTheDocument();
      await userEvent.clear(employeeNameInput);
    });
    await step('Подстановка валидных данных', async () => {
      await userEvent.clear(carNumberInput);
      await userEvent.type(carNumberInput, 'A123BC'); // латиница

      await userEvent.clear(employeeNameInput);
      await userEvent.type(employeeNameInput, 'Иван');
      await userEvent.clear(employeeLastNameInput);
      await userEvent.type(employeeLastNameInput, 'Иванов');
      await userEvent.click(submitBtn);

      // Ошибки должны исчезнуть
      const errorText = canvas.queryByText('Автомобильный номер обязателен');
      expect(errorText).not.toBeInTheDocument();
    });
  }
}`,...I.parameters?.docs?.source}}};const L=[`Default`,`ValidationTests`];export{F as Default,I as ValidationTests,L as __namedExportsOrder,P as default};