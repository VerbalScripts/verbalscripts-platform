import React, { useEffect } from 'react';

interface SettingsTabProps {
  config: OrderConfiguration;
  setConfig: (arg0: OrderConfiguration) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function SettingsTab({ config, setConfig }: SettingsTabProps) {
  const languages = new Map([
    ['English', 'en'],
    ['Spanish', 'es'],
    ['French', 'fr'],
    ['German', 'de'],
    ['Chinese (Mandarin)', 'zh-CN'],
    ['Japanese', 'ja'],
    ['Hindi', 'hi'],
    ['Arabic', 'ar'],
    ['Portuguese', 'pt'],
    ['Russian', 'ru'],
    ['Italian', 'it'],
    ['Korean', 'ko'],
    ['Bengali', 'bn'],
    ['Indonesian', 'id'],
    ['Swahili', 'sw'],
  ]);

  const text_formats = new Map([
    ['Clean Verbatim', 'clean'],
    ['Full Verbatim', 'full'],
  ]);

  const turn_around_time = new Map([
    ['Less than 24hrs', 'Less_than_24hrs'],
    ['2 days', '2_days'],
    ['3 days', '3_days'],
    ['5 days', '5_days'],
  ]);

  const speakers = new Map([
    ['1-2', '1-2'],
    ['3 or more', '3+'],
  ]);

  const timestamping = new Map([
    ['Not Required', 'Not Required'],
    ['On Speaker Change', 'speaker'],
    ['Every 10 Seconds', '10s'],
    ['Every 30 Seconds', '30s'],
    ['Every 2 Minutes', '2min'],
  ]);

  useEffect(() => {
    console.log(config);
  }, [config]);

  return (
    <section className='flex flex-col gap-10    divide-gray-400'>
      <div className='flex justify-between items-center'>
        <div className='flex text-gray-600 text-md font-semibold'>Language</div>
        <div>
          <div className='block w-full'>
            <select
              id='countries'
              defaultValue={config.language}
              className='h-12 border border-gray-300 text-gray-600 text-base rounded-full block w-full py-2.5 px-4 focus:outline-none'
            >
              {Array.from(languages.entries()).map(([language, code]) => (
                <option key={code} value={code}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex text-gray-600 text-md font-semibold'>
          Text Format{' '}
        </div>
        <div>
          <div className='block w-full'>
            <div className='flex items-center gap-5'>
              {Array.from(text_formats.entries()).map(([label, format]) => (
                <div key={format} className='flex items-center gap-x-3'>
                  <input
                    id='text_format'
                    name='text_format'
                    defaultValue={format}
                    defaultChecked={config.text_format == format ? true : false}
                    type='radio'
                    className='h-7 w-7 border-gray-300 text-indigo-500 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor={format}
                    className='block text-md font-medium leading-6 text-gray-700'
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className='flex justify-between items-center'>
        <div className='flex text-gray-600 text-md font-semibold'>
          Low-quality audio Heavy accent
        </div>
        <div>
          <div className='block w-full'>
            <div className='flex items-center gap-5'>
              {Array.from(turn_around_time.entries()).map(([label, format]) => (
                <div key={format} className='flex items-center gap-x-3'>
                  <input
                    id={format}
                    name='push-notifications'
                    type='radio'
                    className='h-7 w-7 border-gray-300 text-indigo-500 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor={format}
                    className='block text-md font-medium leading-6 text-gray-700'
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      <div className='flex justify-between items-center'>
        <div className='flex text-gray-600 text-md font-semibold'>
          Turn Around time
        </div>
        <div>
          <div className='block w-full'>
            <div className='flex items-center gap-5'>
              {Array.from(turn_around_time.entries()).map(
                ([label, tr_time]) => (
                  <div key={tr_time} className='flex items-center gap-x-3'>
                    <input
                      id='turn_around_time'
                      name='turn_around_time'
                      defaultChecked={
                        config.turn_around_time == tr_time ? true : false
                      }
                      defaultValue={tr_time}
                      type='radio'
                      className='h-7 w-7 border-gray-300 text-indigo-500 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor={'turn_around_time'}
                      className='block text-md font-medium leading-6 text-gray-700'
                    >
                      {label}
                    </label>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex text-gray-600 text-md font-semibold'>
          Number of speakers
        </div>
        <div>
          <div className='block w-full'>
            <div className='flex items-center gap-5'>
              {Array.from(speakers.entries()).map(([label, speaker_size]) => (
                <div key={speaker_size} className='flex items-center gap-x-3'>
                  <input
                    id='speaker_size'
                    name='speakers'
                    type='radio'
                    defaultChecked={
                      config.speakers == speaker_size ? true : false
                    }
                    defaultValue={speaker_size}
                    className='h-7 w-7 border-gray-300 text-indigo-500 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor='speaker_size'
                    className='block text-md font-medium leading-6 text-gray-700'
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex text-gray-600 text-md font-semibold'>
          Use Timestamps
        </div>
        <div>
          <div className='block w-full'>
            <select
              id='timestamps'
              defaultValue={config.apply_timestamps}
              className='h-12 border border-gray-300 text-gray-600 text-base rounded-full block w-full py-2.5 px-4 focus:outline-none'
            >
              {Array.from(timestamping.entries()).map(([ts_opt, code]) => (
                <option key={code} value={code}>
                  {ts_opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
